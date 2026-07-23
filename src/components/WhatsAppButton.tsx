"use client";

import React from "react";
// Import the closest clean alternative from Lucide
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "923095785647"; // Clinic number: 0309 5785647[cite: 1]
  const message = encodeURIComponent(
    "Hi SkinOvationS, I would like to book a consultation / inquire about treatments."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Outer Pulse Rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:animate-none"></span>

      {/* Tooltip */}
      <span className="absolute right-16 bg-white dark:bg-zinc-900 text-brand-charcoal dark:text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-zinc-100 dark:border-zinc-800 opacity-0 scale-90 translate-x-3 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        Chat with us
      </span>

      {/* Lucide React Replacement */}
      <MessageCircle className="w-7 h-7 stroke-[2.5]" />
    </a>
  );
}