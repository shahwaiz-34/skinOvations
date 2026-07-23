"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Award } from "lucide-react";
import Hero_img from "../../public/h.jpg";


export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Smooth mouse follow effect for ambient light
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const { left, top } = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  // Custom easing for premium, slow-reveal animations
  const luxuryEasing = [0.22, 1, 0.36, 1];

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#F3EFE6] to-[#FDFBEE] dark:from-[#181A14] dark:to-[#1D1F19]"
    >
      {/* 1. Interactive Mouse Light Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(194, 163, 79, 0.04), transparent 40%)`,
        }}
      />

      {/* 2. Botanical Blur & Soft Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Sage/Olive top left */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-brand-sage/20 dark:bg-brand-olive/10 rounded-full blur-[100px]"
        />
        {/* Warm Gold bottom right */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-brand-gold/15 dark:bg-brand-gold/10 rounded-full blur-[120px]"
        />
      </div>

      {/* 3. Floating Ethereal Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 0],
              x: Math.sin(i) * 50,
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute w-1.5 h-1.5 bg-brand-gold/30 rounded-full blur-[1px]"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: luxuryEasing }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/40 dark:bg-black/20 backdrop-blur-md border border-brand-gold/20 dark:border-brand-gold/10 text-brand-olive-dark dark:text-brand-gold-light text-[11px] font-semibold uppercase tracking-[0.15em] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse-subtle" /> 
              SkinOvationS Rawalpindi
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: luxuryEasing }}
              className="font-serif text-4xl sm:text-5xl lg:text-[4.2rem] font-medium tracking-tight text-brand-charcoal dark:text-[#F3EFE6] leading-[1.15]"
            >
              Reveal Your Natural Beauty with{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-olive-dark via-brand-olive to-brand-gold dark:from-brand-gold dark:via-brand-gold-light dark:to-white">
                  Professional Care
                </span>
                {/* Subtle text glow underneath */}
                <span className="absolute inset-0 z-0 bg-brand-gold/20 blur-2xl"></span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: luxuryEasing }}
              className="text-brand-charcoal/70 dark:text-[#F3EFE6]/70 text-[15px] sm:text-[17px] font-light leading-relaxed max-w-xl mx-auto lg:mx-0 tracking-wide"
            >
              Restore your hair confidence and achieve radiant skin with our cutting-edge FUE & DHI hair transplants, Pico lasers, Exosomes, and bespoke dermatologist-led solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: luxuryEasing }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6"
            >
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-8 py-4 bg-brand-olive hover:bg-brand-olive-dark text-white text-[12px] font-semibold uppercase tracking-[0.1em] rounded-full shadow-[0_10px_30px_rgba(80,98,58,0.2)] hover:shadow-[0_15px_40px_rgba(80,98,58,0.3)] transition-all duration-500 overflow-hidden flex items-center justify-center gap-3"
              >
                {/* Button Hover Glow */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <Calendar className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" /> 
                <span>Book Consultation</span>
              </button>
              
              <button
                onClick={() => document.querySelector("#treatments")?.scrollIntoView({ behavior: "smooth" })}
                className="group px-8 py-4 border border-brand-olive/10 dark:border-brand-gold/20 bg-white/50 dark:bg-[#20231B]/50 backdrop-blur-sm text-brand-charcoal dark:text-[#F3EFE6] hover:bg-white dark:hover:bg-[#20231B] text-[12px] font-semibold uppercase tracking-[0.1em] rounded-full shadow-sm hover:shadow-lg transition-all duration-500 flex items-center justify-center"
              >
                View Treatments
              </button>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: luxuryEasing }}
            className="lg:col-span-6 flex justify-center relative"
          >
            {/* Ethereal Glow behind image */}
            <div className="absolute inset-0 bg-brand-olive/5 dark:bg-brand-gold/5 blur-3xl rounded-full transform scale-110" />

            {/* Slow Floating Image Container */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-[4/5] sm:aspect-[4/4] max-w-[440px] rounded-t-full rounded-b-[2.5rem] overflow-hidden border-4 border-white/40 dark:border-white/5 shadow-[0_30px_60px_-15px_rgba(80,98,58,0.15)] bg-brand-cream-dark/20 backdrop-blur-sm"
            >
              <Image
                src={Hero_img}
                alt="Premium Skincare & Aesthetics"
                fill
                priority
                className="object-cover scale-105 hover:scale-110 transition-transform duration-[2s] ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Image Lighting Overlay (Soft Gradient) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Trust Card with Glassmorphism */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 sm:bottom-6 sm:-left-8 right-6 sm:right-auto p-4 md:p-5 glass-panel rounded-2xl flex items-center gap-4 sm:max-w-[280px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] z-20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold-light to-brand-gold text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-charcoal dark:text-white mb-1">
                  Dermatologist Led
                </h4>
                <p className="text-[11px] text-brand-charcoal/60 dark:text-white/60 leading-tight">
                  7+ Years Excellence in Clinical Aesthetics
                </p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}