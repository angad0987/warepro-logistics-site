/* eslint-disable prettier/prettier */

import { ENV } from "@/config/environment";

/**
 * Backend-agnostic career application service.
 * The UI only knows about `submitCareerApplication` — the transport below can be
 * swapped for Google Forms, Apps Script, an API or a database without UI changes.
 */

export interface CareerApplicationInput {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  qualification: string;
  linkedin?: string;
  resume?: File | null;
  coverLetter?: File | null;
}

export interface CareerApplicationResult {
  success: boolean;
  message?: string;
}

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
): Promise<CareerApplicationResult> {
  const payload: Record<string, unknown> = {
    formType: "CAREER_APPLICATION",
    fullName: input.fullName,
    email: input.email,
    phone: input.phone,
    location: input.location,
    qualification: input.qualification,
    linkedin: input.linkedin ?? "",
  };

  if (input.resume) payload["resume"] = await filePayload(input.resume);
  if (input.coverLetter) payload["coverLetter"] = await filePayload(input.coverLetter);

  const response = await fetch(ENV.API_URL, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return { success: false, message: "Request failed" };
  }

  try {
    const json = (await response.json()) as CareerApplicationResult;
    return { success: Boolean(json?.success), message: json?.message };
  } catch {
    return { success: true };
  }
}
