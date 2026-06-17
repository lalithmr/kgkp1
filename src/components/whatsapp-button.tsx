"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center gap-3 rounded-full bg-[#1FA855] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(31,168,85,0.28)] transition hover:bg-[#1a934b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1FA855] sm:bottom-5 sm:right-5 sm:h-auto sm:w-auto sm:px-5"
      aria-label="Chat with KGKP Consultancy on WhatsApp"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/16 text-lg">
        W
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
