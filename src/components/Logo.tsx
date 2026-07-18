"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-16 w-16", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Logo Image */}
      <div className={`${className} relative shrink-0 rounded-full overflow-hidden shadow-[0_2px_12px_rgba(197,168,80,0.25)]`}>
        <Image
          src="/logo.jpg"
          alt="SkinOvationS Logo"
          fill
          className="object-cover"
          sizes="64px"
          priority
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-charcoal dark:text-brand-cream">
            Skin<span className="text-brand-gold">OvationS</span>
          </span>
          <span className="text-[9px] tracking-[0.16em] text-brand-olive dark:text-brand-gold-light font-medium uppercase -mt-1">
            Hair Transplant • Laser • Skin Clinic
          </span>
        </div>
      )}
    </div>
  );
}
