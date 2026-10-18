/**
 * ============================================================
 * Office Location Configuration
 * ============================================================
 *
 * Single source of truth for the CoreWarehousing office map.
 * Coordinates were resolved from the address already present
 * in the website (see BRAND.address) via Geoapify geocoding:
 *
 *   Unit No. 1029, Tower A, Spaze i-Tech Park, Sector-49,
 *   Sohna Road, Gurugram, Haryana 122018, India
 *   -> 28.412827, 77.04405  (Spaze i-Tech Park, Sohna Road)
 * ============================================================
 */

import { BRAND } from "@/lib/brand";

const lat = 28.412827;
const lng = 77.04405;

const query = `${lat},${lng}`;

export const OFFICE_LOCATION = {
  name: "CoreWarehousing Office",
  lat,
  lng,
  zoom: 16,
  address: BRAND.address,
  phone: BRAND.phone,
  phoneHref: BRAND.phoneHref,
  email: BRAND.email,
  mapsSearchUrl: `https://www.google.com/maps/search/?api=1&query=${query}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${query}`,
  mapStyle: "positron",
} as const;
