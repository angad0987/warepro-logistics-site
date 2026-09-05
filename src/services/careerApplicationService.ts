/* eslint-disable prettier/prettier */

import { ENV } from "@/config/environment";

/**
 * Backend-agnostic career application service.
 * The UI only knows about `submitCareerApplication` — the transport below can be
 * swapped for Google Forms, Apps Script, an API or a database without UI changes.
 */

export interface CareerApplicationInput {
  token: string;
  fullName: string;
  email: string;
  phone: string;
  location?: string;
  linkedin?: string;
  areaOfInterest?: string;
  yearsExperience?: number;
  aboutYourself?: string;
  resume?: File | null;
}

export interface CallbackSuccessResponse {
  success: true;
  message: string;
}

export interface CallbackValidationErrorResponse {
  success: false;
  type: "VALIDATION_ERROR";
  message: string;
  errors: Record<string, string>;
}

export interface CallbackSecurityErrorResponse {
  success: false;
  type: "SECURITY_ERROR";
  message: string;
  errors: null;
}

export interface CallbackDuplicateErrorResponse {
  success: false;
  type: "DUPLICATE_ERROR";
  message: string;
  errors: null;
}

export interface CallbackServerErrorResponse {
  success: false;
  type: "SERVER_ERROR";
  message: string;
  errors: null;
}

export type CallbackResponse =
  | CallbackSuccessResponse
  | CallbackValidationErrorResponse
  | CallbackSecurityErrorResponse
  | CallbackDuplicateErrorResponse
  | CallbackServerErrorResponse;

async function fileToBase64(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

async function filePayload(file: File) {
  return {
    fileName: file.name,
    mimeType: file.type,
    size: file.size,
    data: await fileToBase64(file),
  };
}

export async function submitCareerApplication(
  input: CareerApplicationInput,
): Promise<CallbackResponse> {
  const payload: Record<string, unknown> = {
    token: input.token,
    formType: "CAREER_APPLICATION",
    fullName: input.fullName,
    email: input.email,
    phone: input.phone,
    location: input.location ?? "",
    linkedin: input.linkedin ?? "",
    areaOfInterest: input.areaOfInterest ?? "",
    yearsExperience: input.yearsExperience ?? "",
    aboutYourself: input.aboutYourself ?? "",
  };

  if (input.resume) payload["resume"] = await filePayload(input.resume);

  const response = await fetch(ENV.API_URL, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return response.json();
}
