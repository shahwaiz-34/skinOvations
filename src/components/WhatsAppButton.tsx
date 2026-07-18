"use client";

import React from "react";

export default function WhatsAppButton() {
  const whatsappNumber = "923095785647"; // Clinic number: 0309 5785647
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

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.48.002 9.932-4.445 9.935-9.925.002-2.652-1.026-5.148-2.898-7.022C16.438 1.782 13.945 1.76 11.938 1.76c-5.482 0-9.94 4.448-9.943 9.932-.001 1.902.486 3.766 1.413 5.371l-.974 3.56 3.65-.957.573.348zm12.933-5.267c-.27-.136-1.602-.79-1.85-.88-.25-.09-.43-.136-.61.136-.18.27-.694.88-.85 1.057-.158.178-.316.2-.586.064-.27-.136-1.14-.42-2.17-1.34-.8-.713-1.34-1.595-1.5-1.866-.157-.27-.017-.417.118-.552.12-.123.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.046-.337-.022-.472-.068-.136-.61-1.474-.837-2.02-.22-.53-.443-.457-.61-.466-.156-.008-.337-.01-.518-.01-.18 0-.473.067-.72.337-.248.27-.946.924-.946 2.256s.97 2.62 1.104 2.8c.135.178 1.91 2.915 4.626 4.09 1.127.487 2.008.777 2.695.994.69.217 1.316.186 1.812.112.553-.083 1.602-.656 1.828-1.258.225-.603.225-1.12.158-1.228-.068-.11-.25-.2-.52-.336z" />
      </svg>
    </a>
  );
}
