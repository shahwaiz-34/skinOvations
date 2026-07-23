"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Copy } from "lucide-react";
import { toast } from "sonner";

export default function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const promoCode = "SKINOVATIONS30";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 10_000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("skin_discount_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate API registration
    setIsSubmitted(true);
    toast.success("Welcome discount unlocked successfully!", {
      description: "Use coupon code SKINOVATIONS30 at checkout.",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    toast.success("Promo code copied!", {
      description: "Code SKINOVATIONS30 is saved to your clipboard.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white dark:bg-[#1B201A] border border-brand-olive/10 dark:border-brand-gold/20 shadow-[0_20px_50px_rgba(78,94,68,0.25)]"
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header / Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-brand-charcoal dark:hover:text-white transition-colors p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content area */}
            <div className="p-8 md:p-10 flex flex-col items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-olive/10 dark:bg-brand-gold/20 text-brand-olive dark:text-brand-gold-light text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                Special Offer
              </div>

              {!isSubmitted ? (
                <>
                  <h3 className="font-serif text-3xl font-bold tracking-tight text-brand-charcoal dark:text-white mb-2">
                    Get <span className="text-brand-gold font-extrabold">30% OFF</span>
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm max-w-sm mb-6 leading-relaxed">
                    Subscribe to our clinic newsletter and enjoy 30% discount on your first Hair Transplant or Skin Treatment consultation.
                  </p>

                  <form onSubmit={handleSubmit} className="w-full space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-brand-charcoal dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-olive hover:bg-brand-olive-dark text-white font-medium rounded-xl hover:shadow-lg active:scale-[0.99] transition-all text-sm"
                    >
                      Unlock 30% Discount
                    </button>
                  </form>
                </>
              ) : (
                <div className="w-full flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-brand-charcoal dark:text-white mb-2">
                    Your Promo Code is Ready!
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm max-w-sm mb-6">
                    Mention this code during your booking or present it at the reception counter.
                  </p>

                  {/* Coupon Container */}
                  <div className="w-full flex items-center justify-between p-4 bg-brand-cream dark:bg-zinc-900 rounded-xl border border-dashed border-brand-gold/40 mb-6">
                    <span className="font-mono text-lg font-bold tracking-wider text-brand-olive dark:text-brand-gold-light select-all">
                      {promoCode}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-semibold rounded-lg transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy Code
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={handleClose}
                    className="text-xs text-zinc-400 hover:text-brand-charcoal dark:hover:text-white underline transition-colors"
                  >
                    Done, Close this
                  </button>
                </div>
              )}

              {/* Secure Trust note */}
              <div className="mt-6 text-[11px] text-zinc-400 flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
                Your privacy is safe with us. Standard T&C apply.
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
