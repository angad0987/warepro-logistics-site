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
  const retries = useRef(0);
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  return (
    <ClientOnly>
      <Turnstile
        sitekey={TURNSTILE_SITE_KEY}
        retry="auto"
        retryInterval={4000}
        refreshExpired="auto"
        onVerify={(token) => {
          retries.current = 0;
          onVerifyRef.current(token);
        }}
        onExpire={() => {
          onExpireRef.current();
        }}
        onTimeout={() => {
          onExpireRef.current();
        }}
        onError={() => {
          onExpireRef.current();
        }}
      />
    </ClientOnly>
  );
}
