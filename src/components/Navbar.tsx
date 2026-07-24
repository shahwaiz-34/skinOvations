"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Sun, Moon, Menu, X, Calendar } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Load and apply theme from local storage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
   

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { label: "Home", href: "#home" },

    { label: "Treatments", href: "#treatments" },
 { label: "Meet the Doctor", href: "#doctor" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-brand-ivory/85 dark:bg-[#252918]/85 backdrop-blur-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] border-b border-brand-gold/20 dark:border-brand-gold/15 py-4"
            : "bg-gradient-to-b from-brand-cream/65 to-transparent dark:from-[#181A10]/45 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleScrollTo(e, "#home")} 
            className="relative z-50 focus:outline-none group flex items-center"
          >
            <Logo className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-500 ease-out group-hover:scale-105" showText={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-2 text-[13px] font-medium tracking-[0.05em] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-full hover:bg-zinc-100/80 dark:hover:bg-white/10 transition-all duration-300 ease-out"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons (Theme Toggle & CTA) */}
          <div className="hidden lg:flex items-center gap-4">
          

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="group flex items-center gap-2 px-6 py-2.5 bg-brand-olive dark:bg-brand-gold hover:bg-opacity-90 text-white dark:text-black text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(var(--brand-olive-rgb),0.4)] hover:shadow-[0_8px_25px_-5px_rgba(var(--brand-olive-rgb),0.5)] hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" /> 
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex lg:hidden items-center gap-3 relative z-50">


            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full bg-brand-ivory dark:bg-[#252918] border border-brand-gold/25 dark:border-brand-gold/20 text-brand-olive-dark dark:text-brand-cream transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-[#292816]/45 dark:bg-[#10120D]/70 backdrop-blur-sm transition-opacity duration-500 ease-out lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sliding Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-brand-ivory dark:bg-[#252918] shadow-2xl border-l border-brand-gold/25 dark:border-brand-gold/20 flex flex-col justify-between transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6 pb-6 overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="group flex items-center justify-between text-[15px] font-medium tracking-[0.05em] text-brand-charcoal/75 dark:text-brand-cream/75 hover:text-brand-olive dark:hover:text-brand-gold py-4 px-4 rounded-2xl hover:bg-brand-cream dark:hover:bg-brand-olive/15 transition-all duration-300"
                style={{ 
                  transitionDelay: `${isMobileMenuOpen ? index * 50 : 0}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                {link.label}
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="p-6 bg-brand-cream/70 dark:bg-brand-olive/10 border-t border-brand-gold/20 dark:border-brand-gold/15">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="w-full flex items-center justify-center gap-2 py-4 bg-brand-olive dark:bg-brand-gold text-white dark:text-black text-[14px] font-semibold uppercase tracking-[0.08em] rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}
