/* eslint-disable prettier/prettier */
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-gfQRgIbtuFwRAFE_20wce7SYjB3XnEpOY7Nc1OxiTDCaZdaftUWHmCPrdEKZoFjt/exec";

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

export async function submitCallbackRequest(data: {
  name: string;
  business: string;
  city:string;
  phone: string;
  email: string;
  token: string;
  formType: string;
  companyName?: string;
  monthlyOrder?: string;
  warehouseType?: string;
  message?: string;
}): Promise<CallbackResponse> {
  const response = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
  });
  return response.json();
}
