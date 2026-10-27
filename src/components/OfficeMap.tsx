import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@/office-map.css";
import { ENV } from "@/config/environment";
import { OFFICE_LOCATION } from "@/config/office";
import { trackEvent } from "@/lib/analytics";
import { useIsMobile } from "@/hooks/use-mobile";

const { name, lat, lng, zoom, mapStyle } = OFFICE_LOCATION;

function createOfficeIcon() {
  return L.divIcon({
    className: "cw-map-marker",
    html: `
      <div class="cw-map-marker__pin">
        <svg viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" stroke-width="2.2"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -44],
  });
}

function MapResizer() {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => map.invalidateSize());
    observer.observe(container);
    return () => observer.disconnect();
  }, [map]);

  return null;
}

export default function OfficeMap() {
  const apiKey = ENV.GEOAPIFY_API_KEY;
  const icon = useMemo(createOfficeIcon, []);
  const isMobile = useIsMobile();

  if (!apiKey) {
    return (
      <div className="cw-map-fallback">
        <span className="cw-map-fallback__title">{name}</span>
        <p className="cw-map-fallback__address">{OFFICE_LOCATION.address}</p>
        <a
          href={OFFICE_LOCATION.mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cw-map-fallback__link"
        >
          Open in Maps
        </a>
      </div>
    );
  }

  return (
    <div className="cw-map-wrap">
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        scrollWheelZoom
        zoomControl={false}
        attributionControl={false}
        className="cw-map"
      >
        <TileLayer
          url={`https://maps.geoapify.com/v1/tile/${mapStyle}/{z}/{x}/{y}@2x.png?apiKey=${apiKey}`}
          maxZoom={19}
        />
        <MapResizer />
        <ZoomControl position="topright" />
        <Marker position={[lat, lng]} icon={icon} title={name}>
          <Tooltip
            key={isMobile ? "label-mobile" : "label-desktop"}
            permanent
            direction={isMobile ? "bottom" : "right"}
            offset={isMobile ? [0, 8] : [30, 0]}
            opacity={1}
            className="cw-map-label"
          >
            {name}
          </Tooltip>
          <Popup className="cw-map-popup" closeButton={false}>
            <div className="cw-map-popup__title">{name}</div>
            <p className="cw-map-popup__address">
              Unit No. 1029, Tower A,
              <br />
              Spaze i-Tech Park,
              <br />
              Sector-49, Sohna Road,
              <br />
              Gurugram, Haryana 122018, India
            </p>
            <div className="cw-map-popup__contact">
              <a
                href={OFFICE_LOCATION.phoneHref}
                onClick={() =>
                  trackEvent("phone_click", {
                    link_location: "contact_page",
                    transport_type: "beacon",
                  })
                }
              >
                {OFFICE_LOCATION.phone}
              </a>
              <a
                href={`mailto:${OFFICE_LOCATION.email}`}
                onClick={() =>
                  trackEvent("email_click", {
                    link_location: "contact_page",
                    transport_type: "beacon",
                  })
                }
              >
                {OFFICE_LOCATION.email}
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <div className="cw-map-attribution">
        <a href="https://www.geoapify.com/" target="_blank" rel="noopener noreferrer">
          Geoapify
        </a>
        <span aria-hidden="true"> · </span>
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
        >
          © OpenStreetMap
        </a>
      </div>
    </div>
  );
}
