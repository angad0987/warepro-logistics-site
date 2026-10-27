import { ENV } from "@/config/environment";

type GtagCommand = "js" | "config" | "event";

type GtagFunction = (command: GtagCommand, ...args: unknown[]) => void;

type LinkLocation =
  | "header"
  | "mobile_menu"
  | "hero"
  | "floating"
  | "footer"
  | "contact_page"
  | "body";

type FormName = "contact" | "quick_enquiry" | "careers";

type CtaName =
  | "quote"
  | "storage_quote"
  | "facility_walkthrough"
  | "partner"
  | "talk_to_team"
  | "sector_specialist"
  | "apply";

type AnalyticsEventName =
  | "phone_click"
  | "whatsapp_click"
  | "email_click"
  | "cta_click"
  | "form_start"
  | "form_error"
  | "generate_lead"
  | "job_application";

type AnalyticsEventParams = {
  link_location?: LinkLocation;
  transport_type?: "beacon";
  cta_name?: CtaName;
  form_name?: FormName;
  page_path?: string;
};

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFunction;
  }
}

const ALLOWED_HOSTS = new Set(["corewarehousing.com", "www.corewarehousing.com"]);
const SCRIPT_ID = "cw-ga4-script";
const IDLE_TIMEOUT_MS = 3000;

let analyticsInitialized = false;

function isProductionHost(): boolean {
  return ALLOWED_HOSTS.has(window.location.hostname);
}

function scheduleIdle(callback: () => void): void {
  const idleWindow = window as IdleWindow;

  if (typeof idleWindow.requestIdleCallback === "function") {
    idleWindow.requestIdleCallback(callback, { timeout: IDLE_TIMEOUT_MS });
    return;
  }

  window.setTimeout(callback, IDLE_TIMEOUT_MS);
}

function runAfterLoad(callback: () => void): void {
  if (document.readyState === "complete") {
    scheduleIdle(callback);
    return;
  }

  window.addEventListener("load", () => scheduleIdle(callback), { once: true });
}

function loadGtagScript(measurementId: string): void {
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

export function initAnalytics(): void {
  if (typeof window === "undefined" || analyticsInitialized) return;
  if (!isProductionHost()) return;

  const measurementId = ENV.GA_MEASUREMENT_ID;

  if (!measurementId) return;

  analyticsInitialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  } as GtagFunction;

  runAfterLoad(() => {
    loadGtagScript(measurementId);
    window.gtag?.("js", new Date());
    window.gtag?.("config", measurementId);
  });
}

export function trackEvent(name: AnalyticsEventName, params: AnalyticsEventParams = {}): void {
  if (typeof window === "undefined" || !isProductionHost()) return;

  window.gtag?.("event", name, params);
}
