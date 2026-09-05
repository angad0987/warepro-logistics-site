import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

export function CallNowButton() {
  return (
    <motion.a
      href={BRAND.phoneHref}
      aria-label="Call Now"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-24 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-elegant"
      style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
    >
      <Phone className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-blue-400/40" />
    </motion.a>
  );
}
