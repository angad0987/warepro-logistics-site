/* eslint-disable prettier/prettier */
import { Turnstile } from "react-turnstile";
import { useEffect, useRef, useState } from "react";
import { ENV } from "@/config/environment";

const TURNSTILE_SITE_KEY = ENV.TURNSTILE_SITE_KEY;

type Props = {
  onVerify: (token: string) => void;
  onExpire: () => void;
};
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}

export function TurnstileWidget({ onVerify, onExpire }: Props) {
  const [widgetKey, setWidgetKey] = useState(0);
  const retries = useRef(0);

  const restart = () => {
    if (retries.current >= 3) return;
    retries.current += 1;
    setTimeout(() => setWidgetKey((k) => k + 1), 1000);
  };

  return (
    <ClientOnly>
      <Turnstile
        key={widgetKey}
        sitekey={TURNSTILE_SITE_KEY}
        retry="auto"
        retryInterval={4000}
        refreshExpired="auto"
        onVerify={(token) => {
          retries.current = 0;
          onVerify(token);
        }}
        onExpire={onExpire}
        onTimeout={() => {
          onExpire();
          restart();
        }}
        onError={() => {
          onExpire();
          restart();
        }}
      />
    </ClientOnly>
  );
}
