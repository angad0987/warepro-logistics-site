import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

export function WhatsAppButton() {
  return (
    <motion.a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-elegant"
      style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full animate-ping bg-green-400/40" />
    </motion.a>
  );
}
