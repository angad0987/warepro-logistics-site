import { Turnstile } from "react-turnstile";
import { useEffect, useState} from "react";

const TURNSTILE_SITE_KEY = "0x4AAAAAAD-QgbU_QzuaLLUM";

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
