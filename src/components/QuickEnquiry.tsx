import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import { z } from "zod";
import { submitCallbackRequest } from "@/services/callbackService";
import { CheckCircle2, Send } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { quickEnquiry } from "@/content/home";
import type {
  GeoapifyContext as GeoapifyContextType,
  GeoapifyGeocoderAutocomplete as GeoapifyAutocompleteType,
} from "@geoapify/react-geocoder-autocomplete";

const GEOAPIFY_API_KEY = "599ec45612474e8ea2babe2cd8b9bef4";

type GeoapifyLib = {
  Context: ComponentType<{ apiKey: string; children: ReactNode }>;
  Autocomplete: ComponentType<ComponentProps<typeof GeoapifyAutocompleteType>>;
};

type Place = { properties?: { city?: string } };

const quickSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  businessType: z.string().min(1, "Select a business type"),
  phone: z.string().trim().min(8, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required"),
  city: z.string().min(2, "City is required").max(100, "City is too long"),
});

export function QuickEnquiry() {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const selectedPlaceRef = useRef<Place | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");

  const [Geoapify, setGeoapify] = useState<GeoapifyLib | null>(null);

  useEffect(() => {
    let active = true;
    Promise.all([
      import("@geoapify/react-geocoder-autocomplete"),
      import("@geoapify/geocoder-autocomplete/styles/minimal.css"),
      import("@/geoapify-overrides.css"),
    ])
      .then(([m]) => {
        if (!active) return;
        setGeoapify({
          Context: m.GeoapifyContext,
          Autocomplete: m.GeoapifyGeocoderAutocomplete,
        });
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const resetForm = () => {
    setName("");
    setBusinessType("");
    setPhone("");
    setEmail("");
    setErrors({});
    setErrorMessage("");
    setCity("");
    setSelectedPlace(null);
    selectedPlaceRef.current = null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      setErrorMessage("Please complete the security verification.");
      return;
    }

    if (isSubmitting) return;

    const data = { name, businessType, phone, email, city };
    const parsed = quickSchema.safeParse(data);

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string") errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }

    setErrors({});
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await submitCallbackRequest({
        name: parsed.data.name,
        business: parsed.data.businessType,
        city: parsed.data.city,
        phone: parsed.data.phone,
        email: parsed.data.email,
        token: token,
        formType: "QUICK_ENQUIRY",
      });

      if (result.success) {
        resetForm();
        setErrors({});
        setErrorMessage("");
        setSubmitted(true);
        return;
      }

      switch (result.type) {
        case "VALIDATION_ERROR": {
          const mapped: Record<string, string> = {};
          if (result.errors) {
            for (const [key, value] of Object.entries(result.errors)) {
              mapped[key === "business" ? "businessType" : key] = value;
            }
          }
          setErrors(mapped);
          setErrorMessage("");
          break;
        }
        case "SECURITY_ERROR":
          setErrorMessage(result.message);
          break;
        case "DUPLICATE_ERROR":
          setErrorMessage(result.message);
          break;
        case "SERVER_ERROR":
          setErrorMessage(result.message);
          break;
        default:
          setErrorMessage("Something went wrong.");
          break;
      }
    } catch {
      setErrorMessage(quickEnquiry.errorNetworkMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 md:p-6 shadow-elegant">
      <div className="text-white">
        <div className="text-[11px] font-semibold tracking-widest uppercase text-primary">
          {quickEnquiry.eyebrow}
        </div>
        <h3 className="mt-1.5 text-xl font-bold font-heading">{quickEnquiry.headline}</h3>
        <p className="mt-1 text-sm text-white/75">{quickEnquiry.subheadline}</p>
      </div>
      {submitted ? (
        <div className="mt-5 rounded-xl bg-white/10 border border-white/20 p-4 text-white">
          <div className="flex items-center gap-2 font-semibold text-sm">
            <CheckCircle2 className="h-5 w-5 text-primary" /> {quickEnquiry.successMessage}
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-3 text-sm underline text-primary"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 space-y-3" noValidate>
          <div>
            <input
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-white/15 border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
            />
            {errors.name && <p className="mt-1 text-xs text-primary">{errors.name}</p>}
          </div>
          <div>
            <select
              name="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full rounded-xl bg-white/15 border border-white/20 px-3.5 py-2.5 text-sm text-white outline-none focus:border-primary"
            >
              <option value="" disabled className="text-navy">
                Business type
              </option>
              {quickEnquiry.businessTypes.map((o) => (
                <option key={o} value={o} className="text-navy">
                  {o}
                </option>
              ))}
            </select>
            {errors.businessType && (
              <p className="mt-1 text-xs text-primary">{errors.businessType}</p>
            )}
          </div>
          <div
            onBlur={() => {
              setTimeout(() => {
                if (!selectedPlaceRef.current) setCity("");
              }, 200);
            }}
          >
            {Geoapify ? (
              <Geoapify.Context apiKey={GEOAPIFY_API_KEY}>
                <Geoapify.Autocomplete
                  placeholder="Enter your city"
                  type="city"
                  filterByCountryCode={["in"]}
                  limit={5}
                  debounceDelay={500}
                  skipIcons={true}
                  value={city}
                  placeSelect={(place: Place) => {
                    if (!place) return;
                    setSelectedPlace(place);
                    selectedPlaceRef.current = place;
                    setCity(place.properties?.city ?? "");
                  }}
                  onUserInput={(value: string) => {
                    setSelectedPlace(null);
                    selectedPlaceRef.current = null;
                    setCity(value);
                  }}
                  onClear={() => {
                    setSelectedPlace(null);
                    selectedPlaceRef.current = null;
                    setCity("");
                  }}
                />
              </Geoapify.Context>
            ) : (
              <input
                name="city"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl bg-white/15 border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
              />
            )}

            {errors.city && <p className="mt-1 text-xs text-primary">{errors.city}</p>}
          </div>
          <div>
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl bg-white/15 border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
            />
            {errors.phone && <p className="mt-1 text-xs text-primary">{errors.phone}</p>}
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-white/15 border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
            />
            {errors.email && <p className="mt-1 text-xs text-primary">{errors.email}</p>}
          </div>
          {errorMessage && (
            <div className="rounded-xl bg-red-500/15 border border-red-500/30 p-3 text-sm text-red-300">
              {errorMessage}
            </div>
          )}
          <TurnstileWidget onVerify={setToken} onExpire={() => setToken("")} />
          <button
            type="submit"
            disabled={!token || isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? quickEnquiry.submittingLabel : quickEnquiry.buttonLabel}
            {!isSubmitting && <Send className="h-4 w-4" />}
          </button>
          <div className="flex justify-center">
            <a
              href={BRAND.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-steel transition-all"
            >
              Quick Call
            </a>
          </div>
          <p className="text-[11px] text-white/60 text-center">
            We use the information you provide to respond to your enquiry and assist with your
            warehousing or logistics requirements. Please review our{" "}
            <Link to="/privacy-policy" className="underline hover:text-white/80">
              Privacy Policy
            </Link>{" "}
            to understand how we handle your information.
          </p>
        </form>
      )}
    </div>
  );
}
