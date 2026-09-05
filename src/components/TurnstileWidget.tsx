/* eslint-disable prettier/prettier */
import { Turnstile } from "react-turnstile";
import { useEffect, useState } from "react";
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
  return (
    <ClientOnly>
      <Turnstile
        sitekey={TURNSTILE_SITE_KEY}
        onVerify={onVerify}
        onExpire={onExpire}
        onError={onExpire}
      />
    </ClientOnly>
  );
}
