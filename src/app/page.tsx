"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion ,AnimatePresence } from "framer-motion";
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  Cpu,
  UserCheck,
  HeartHandshake,
  DollarSign,
  Users,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Lock,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import treatments from "../data/treatment";
import HeroSection from "../sections/hero-section";
import Doct from "../../public/doct.png";

// FAQ Items
const faqs = [
  {
    question: "Does the laser hair removal or hair transplant hurt?",
    answer:
      "Laser hair removal causes minimal discomfort, often described as a warm rubber band snap. Hair transplants are performed under local anesthesia, ensuring you feel completely comfortable and pain-free during the graft extraction and implantation process.",
  },
  {
    question: "How many sessions are typically required for laser treatments?",
    answer:
      "For laser hair removal, most patients require 6 to 8 sessions spaced 4 to 6 weeks apart to target hair follicles in different growth phases. Skin treatments like Pico Laser for melasma or CO2 laser for acne scars usually show significant improvement within 3 to 5 sessions.",
  },
  {
    question: "Is the hair transplant procedure safe and permanent?",
    answer:
      "Yes, FUE and DHI hair transplants are exceptionally safe when performed by certified specialists. The hair follicles are harvested from your own donor area (typically the back of the scalp), which is genetically resistant to balding, making the results permanent.",
  },
  {
    question: "What is the expected recovery time after microneedling or PRP?",
    answer:
      "PRP and microneedling have minimal downtime. You might experience mild redness and skin sensitivity similar to a light sunburn for 24 to 48 hours. Most patients return to normal activities the next day.",
  },
  {
    question: "How much do skin and hair procedures cost?",
    answer:
      "Pricing varies depending on the specific treatment area, skin condition, or the number of hair grafts needed. We provide fully transparent pricing during your initial consultation and offer customizable packages to suit your budget.",
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Kashif Rehman",
    role: "Hair Transplant Patient",
    rating: 5,
    text: "Had an amazing experience with Dr. Abdul Khaliq for my FUE transplant. The hairline looks incredibly natural and the density is superb. Highly recommended for hair loss issues!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Ayesha Khan",
    role: "Laser Skincare Client",
    rating: 5,
    text: "I was struggling with severe acne scars for years. After 3 sessions of CO2 Fractional Laser and PRP, my skin feels smooth and the scars have faded significantly. Truly a life-changing clinic!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Zainab Bibi",
    role: "HydraFacial & Glow Therapy",
    rating: 5,
    text: "SkinOvationS has the best HydraFacial in Rawalpindi. The staff is professional, the hygiene levels are pristine, and the immediate glow is fantastic. Love their personalized care!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
  },
];



export default function Home() {
  const [activeTreatmentTab, setActiveTreatmentTab] = useState<"hair" | "skin">("skin");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState("");

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleReserveTreatment = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    handleScrollToSection("#contact");
  };

  return (
    <div className="flex flex-col min-h-screen text-brand-charcoal dark:text-brand-cream bg-brand-cream/30 dark:bg-[#181A10]">
      {/* Navigation Menu */}
      <Navbar />

      {/* Hero Banner Section */}
      
      <HeroSection/>

      {/* Stats Counter Row */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="bg-white dark:bg-[#252918] border-y border-brand-olive/5 dark:border-brand-gold/10 py-10 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-100 dark:divide-zinc-800">
            <div className="space-y-1 py-4 md:py-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-olive dark:text-brand-gold">7+ Years</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Clinical Expertise</p>
            </div>
            <div className="space-y-1 py-4 md:py-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-olive dark:text-brand-gold">5,000+</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Successful Cases</p>
            </div>
            <div className="space-y-1 py-4 md:py-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-olive dark:text-brand-gold">4.9 / 5</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">85+ Google Reviews</p>
            </div>
            <div className="space-y-1 py-4 md:py-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-olive dark:text-brand-gold">100%</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">FDA Cleared Tech</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Treatments Section */}
      <section id="treatments" className="relative py-32 overflow-hidden bg-gradient-to-b from-brand-cream via-brand-ivory to-brand-cream dark:from-[#181A10] dark:via-[#222617] dark:to-[#181A10]">
  {/* Premium Background Blurs */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 dark:bg-brand-gold/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-sage/7 dark:bg-brand-olive/5 rounded-full blur-[120px]" />
  </div>

  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center space-y-5 max-w-2xl mx-auto mb-16">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] font-semibold text-brand-gold uppercase tracking-[0.2em]"
      >
        Our Procedures
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-charcoal dark:text-brand-cream"
      >
        Signature Treatments
      </motion.h2>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-[1px] w-16 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"
      />
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-[15px] text-brand-charcoal/60 dark:text-brand-cream/60 leading-relaxed font-light"
      >
        We offer clinical-grade aesthetic procedures designed to deliver visible, natural, and long-lasting enhancements.
      </motion.p>

      {/* Premium Tab Toggles (Glassmorphism Pill) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="inline-flex gap-2 p-1.5 bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-full border border-brand-gold/15 dark:border-brand-gold/10 mt-6 shadow-sm"
      >
        <button
          onClick={() => setActiveTreatmentTab("skin")}
          className={`relative px-6 py-2.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-500 overflow-hidden ${
            activeTreatmentTab === "skin"
              ? "text-white"
              : "text-brand-charcoal/60 dark:text-white/50 hover:text-brand-charcoal dark:hover:text-white"
          }`}
        >
          {activeTreatmentTab === "skin" && (
            <motion.div
              layoutId="activeTabBackground"
              className="absolute inset-0 bg-brand-olive dark:bg-brand-gold"
              initial={false}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            />
          )}
          <span className="relative z-10">Laser & Skincare</span>
        </button>
        <button
          onClick={() => setActiveTreatmentTab("hair")}
          className={`relative px-6 py-2.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-500 overflow-hidden ${
            activeTreatmentTab === "hair"
              ? "text-white"
              : "text-brand-charcoal/60 dark:text-white/50 hover:text-brand-charcoal dark:hover:text-white"
          }`}
        >
          {activeTreatmentTab === "hair" && (
            <motion.div
              layoutId="activeTabBackground"
              className="absolute inset-0 bg-brand-olive dark:bg-brand-gold"
              initial={false}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            />
          )}
          <span className="relative z-10">Hair Restoration</span>
        </button>
      </motion.div>
    </div>

    {/* Grid Layout of Treatment Cards with AnimatePresence for Tab Switching */}
 <div className="min-h-[400px]">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeTreatmentTab}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
        exit: {
          opacity: 0,
          y: -20,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
    >
      {treatments[activeTreatmentTab].map((treatment, idx) => (
        <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        },
      }}
      key={treatment.title}
      className="group relative h-[500px] w-full flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#1B1E12] border border-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 hover:border-[#AF9052]/30 hover:shadow-[0_30px_60px_-15px_rgba(89,97,38,0.35)] isolate"
    >
      {/* 1. Background Treatment Media with Cinematic Super-Slow Zoom */}
      {treatment.image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={idx < 3}
          />
        </div>
      )}

      {/* 2. Advanced Multi-Layer Editorial Gradients */}
      {/* Ambient Top Shadow for Price Tag readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
      
      {/* Deep Luxury Olive/Charcoal Vignette Shadow to cradle the text layout */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#14170E] via-[#1B1E12]/70 to-transparent z-10 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#14170E] via-[#14170E]/40 to-transparent h-full z-10" />

      {/* Dynamic Luminous Olive Glow Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#596126]/10 via-transparent to-[#AF9052]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

      {/* 3. Luxury Watermark Details (Index Counter & Logo Sparkle Element) */}
      <div className="absolute right-6 top-16 flex flex-col items-end opacity-15 select-none pointer-events-none z-10 group-hover:opacity-25 transition-all duration-1000 ease-out">
        <span className="font-serif text-[110px] font-light leading-none tracking-tighter text-white/50">
          {(idx + 1).toString().padStart(2, "0")}
        </span>
        {/* Signature 4-pointed Star from the SkinOvationS Logo */}
        <svg className="w-5 h-5 text-[#AF9052] fill-current mt-2 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100" viewBox="0 0 24 24">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.6L12 0Z" />
        </svg>
      </div>

      {/* 4. Foreground Content Layout */}
      <div className="relative z-20 p-8 sm:p-9 h-full flex flex-col justify-between">
        
        {/* Top Segment: Luxury Price Badge */}
        <div className="flex items-start justify-end">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1B1E12]/60 border border-white/10 text-[11px] font-medium tracking-[0.2em] text-[#EEE5D9] backdrop-blur-md shadow-inner group-hover:border-[#AF9052]/40 group-hover:text-[#AF9052] transition-all duration-500 uppercase">
            {treatment.price}
          </span>
        </div>
        
        {/* Bottom Segment: Text & Dynamic CTA Action */}
        <div className="space-y-6 mt-auto">
          <div className="space-y-2.5">
            <h3 className="font-serif text-2xl sm:text-[1.65rem] font-normal text-white leading-tight tracking-wide group-hover:text-[#EEE5D9] transition-colors duration-500">
              {treatment.title}
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-white/60 leading-relaxed font-light tracking-wide max-w-[92%] transition-colors duration-500 group-hover:text-white/75">
              {treatment.desc}
            </p>
          </div>
          
          {/* Action Row Component */}
          <div className="pt-5 border-t border-white/10 flex items-center justify-between group-hover:border-[#AF9052]/20 transition-colors duration-500">
            <button
              onClick={() => handleReserveTreatment(treatment.title)}
              className="relative overflow-hidden flex items-center gap-3 py-1 group/btn"
              aria-label={`Reserve your appointment for ${treatment.title}`}
            >
              {/* Premium Slide-under Line effect */}
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#AF9052] group-hover/btn:text-white transition-colors duration-300">
                Reserve Session
              </span>
              
              {/* Premium Custom Micro-arrow Animation */}
              <div className="relative w-4 h-4 overflow-hidden">
                <svg 
                  className="w-4 h-4 stroke-[#AF9052] stroke-[1.5] fill-none absolute left-0 transition-transform duration-300 group-hover/btn:translate-x-4 group-hover/btn:opacity-0" 
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
                <svg 
                  className="w-4 h-4 stroke-white stroke-[1.5] fill-none absolute -left-4 opacity-0 transition-all duration-300 group-hover/btn:translate-x-4 group-hover/btn:opacity-100" 
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/btn:w-full" />
            </button>

            {/* Subtle Brand Logo Stamp Indicator */}
            <span className="text-[9px] font-mono uppercase tracking-widest text-white/20 select-none group-hover:text-[#596126]/60 transition-colors duration-500">
              SkinOvationS
            </span>
          </div>

        </div>
      </div>
    </motion.div>
      ))}
    </motion.div>
  </AnimatePresence>
</div>

  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white dark:bg-[#1B201A] border-y border-zinc-100 dark:border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-olive/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-6 text-center lg:text-left"
            >
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Our Core Values</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-white leading-tight">
                Why Choose SkinOvationS Clinic?
              </h2>
              <div className="h-0.5 w-16 bg-brand-gold mx-auto lg:mx-0"></div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                We combine professional expertise, modern aesthetic technologies, and clinical hygiene to give you the ultimate skincare and hair restoration experience in Rawalpindi.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="px-3.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-lg text-xs font-medium flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-brand-gold" /> ISO Standard Hygiene
                </span>
                <span className="px-3.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-lg text-xs font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-olive" /> Certified Doctors
                </span>
              </div>
            </motion.div>

            {/* Grid Column */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Feature 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
                }}
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121611]/80 border border-zinc-100 dark:border-zinc-900/60 flex items-start gap-4"
              >
                <div className="p-3 bg-brand-olive/10 dark:bg-brand-olive/20 text-brand-olive dark:text-brand-gold-light rounded-xl shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal dark:text-white mb-1">
                    Certified Specialists
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Lead by highly qualified surgeons and dermatologists with years of local and international experience.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
                }}
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121611]/80 border border-zinc-100 dark:border-zinc-900/60 flex items-start gap-4"
              >
                <div className="p-3 bg-brand-olive/10 dark:bg-brand-olive/20 text-brand-olive dark:text-brand-gold-light rounded-xl shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal dark:text-white mb-1">
                    Latest Technology
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Equipped with Pico lasers, Fractional CO2, and specialized implanter pens to yield excellent results.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
                }}
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121611]/80 border border-zinc-100 dark:border-zinc-900/60 flex items-start gap-4"
              >
                <div className="p-3 bg-brand-olive/10 dark:bg-brand-olive/20 text-brand-olive dark:text-brand-gold-light rounded-xl shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal dark:text-white mb-1">
                    Personalized Treatment
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    No template solutions. Each treatment program is custom-tailored to your unique skin type or hair loss pattern.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
                }}
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121611]/80 border border-zinc-100 dark:border-zinc-900/60 flex items-start gap-4"
              >
                <div className="p-3 bg-brand-olive/10 dark:bg-brand-olive/20 text-brand-olive dark:text-brand-gold-light rounded-xl shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal dark:text-white mb-1">
                    Safe Procedures
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    We maintain sterile environments, using FDA-approved tools and disposables to prioritize safety.
                  </p>
                </div>
              </motion.div>

              {/* Feature 5 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
                }}
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121611]/80 border border-zinc-100 dark:border-zinc-900/60 flex items-start gap-4"
              >
                <div className="p-3 bg-brand-olive/10 dark:bg-brand-olive/20 text-brand-olive dark:text-brand-gold-light rounded-xl shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal dark:text-white mb-1">
                    Affordable Pricing
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Transparent pricing schedules, package options, and first-time discount plans.
                  </p>
                </div>
              </motion.div>

              {/* Feature 6 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
                }}
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121611]/80 border border-zinc-100 dark:border-zinc-900/60 flex items-start gap-4"
              >
                <div className="p-3 bg-brand-olive/10 dark:bg-brand-olive/20 text-brand-olive dark:text-brand-gold-light rounded-xl shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-charcoal dark:text-white mb-1">
                    Happy Clients
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Over 5,000+ satisfied clients across Twin Cities, backed by a strong 4.9-star review profile.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After Interactive Gallery */}
      <section id="gallery" className="py-24 bg-brand-cream/10 dark:bg-[#121611]/40">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Interactive Comparison</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-white">
              Before & After Gallery
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Drag the center slider horizontally to reveal the transformative results achieved by our clinic.
            </p>
          </div>

          {/* Slider Component */}
          <BeforeAfterSlider />
        </motion.div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 bg-white dark:bg-[#1B201A] border-y border-zinc-100 dark:border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Testimonials</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-white">
              What Our Happy Patients Say
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          </div>

          {/* Testimonial Slider using Swiper */}
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name} className="h-auto flex">
                  <div className="bg-zinc-50 dark:bg-[#121611]/80 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-900/60 flex flex-col justify-between h-full w-full shadow-xs hover:shadow-md transition-shadow">
                    <div className="space-y-4">
                      {/* Rating Stars */}
                      <div className="flex gap-1 text-brand-gold">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-350 italic leading-relaxed">
                        &ldquo;{t.text}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-900/50">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-200 border border-brand-gold/15">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.image} alt={t.name} className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-brand-charcoal dark:text-white">{t.name}</h4>
                        <p className="text-[10px] text-zinc-400">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section id="doctor" className="py-24 bg-brand-cream/10 dark:bg-[#121611]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/5] max-w-sm rounded-[2rem] overflow-hidden border border-brand-gold/20 shadow-xl bg-zinc-150">
                <Image
                  src={Doct}
                  alt="Dr. Abdul Khaliq"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
            </div>

            {/* Doctor Details */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Lead Medical Expert</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-white">
                Dr. Abdul Khaliq & Specialists
              </h2>
              <div className="h-0.5 w-16 bg-brand-gold mx-auto lg:mx-0"></div>
              <p className="text-xs font-semibold text-brand-olive dark:text-brand-gold-light uppercase tracking-wider">
                FUE & DHI Hair Restoration Surgeon & Skincare Specialists
              </p>

              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  Dr. Abdul Khaliq leads a premier clinical team dedicated to providing state-of-the-art hair transplant and laser dermatology services in Rawalpindi and Islamabad. With over 7 years of hands-on experience, he specializes in high-density FUE, DHI, hairline design, and advanced skin rejuvenation therapies.
                </p>
                <p>
                  At SkinOvationS Clinic, Dr. Abdul Khaliq is supported by qualified dermatologists who implement strict medical standards, utilizing high-quality Exosome serum, Botox injections, FDA-approved laser hair removals, and custom acne scar revision therapies.
                </p>
              </div>

              {/* Certifications & Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-200/40 dark:border-zinc-800/40 max-w-lg mx-auto lg:mx-0">
                <div className="text-center">
                  <span className="block font-bold text-brand-olive dark:text-brand-gold text-lg">7+ Years</span>
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase">Experience</span>
                </div>
                <div className="text-center">
                  <span className="block font-bold text-brand-olive dark:text-brand-gold text-lg">100%</span>
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase">Certified Care</span>
                </div>
                <div className="text-center">
                  <span className="block font-bold text-brand-olive dark:text-brand-gold text-lg">5K+</span>
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase">Happy Patients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-24 bg-white dark:bg-[#1B201A] border-y border-zinc-100 dark:border-zinc-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center space-y-4 mb-14">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Common Questions</span>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#121611]/50 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-serif text-base md:text-lg font-bold text-brand-charcoal dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[250px] border-t border-zinc-150 dark:border-zinc-900/60" : "max-h-0"
                    }`}
                  >
                    <p className="p-6 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Consultation Booking Form Section */}
      <section id="contact" className="py-24 bg-brand-cream/10 dark:bg-[#121611]/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Information Grid Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Connect With Us</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-white">
                  Get in Touch
                </h2>
                <div className="h-0.5 w-16 bg-brand-gold"></div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Have questions or ready to request a session? Feel free to reach out via phone, WhatsApp, or request an appointment directly using our form.
                </p>
              </div>

              {/* Clinic Info Items */}
              <div className="space-y-4">
                {/* Info Item 1: Address */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white dark:bg-[#1B201A] border border-brand-olive/10 dark:border-brand-gold/15 text-brand-olive dark:text-brand-gold-light rounded-xl shadow-sm shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Location</h4>
                    <p className="text-xs text-brand-charcoal dark:text-white font-medium mt-1">
                      D-1025, College Chowk, Al Hafeez Plaza, Saidpur Rd, Block D Satellite Town, Rawalpindi, 46000
                    </p>
                    <a
                      href="https://maps.google.com/?q=D-1025,College+Chowk,Al+Hafeez+Plaza,Saidpur+Rd,Satellite+Town,Rawalpindi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-brand-gold font-bold uppercase hover:underline mt-1.5 inline-block"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                {/* Info Item 2: Phone */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white dark:bg-[#1B201A] border border-brand-olive/10 dark:border-brand-gold/15 text-brand-olive dark:text-brand-gold-light rounded-xl shadow-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone & WhatsApp</h4>
                    <p className="text-xs text-brand-charcoal dark:text-white font-medium mt-1 space-y-1">
                      <span className="block">0309 5785647 (Clinic Hot-line)</span>
                      <span className="block">0321 5660142 (Hair Transplant Desk)</span>
                      <span className="block">0302 3334455 (General Inquiries)</span>
                    </p>
                  </div>
                </div>

                {/* Info Item 3: Email */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white dark:bg-[#1B201A] border border-brand-olive/10 dark:border-brand-gold/15 text-brand-olive dark:text-brand-gold-light rounded-xl shadow-sm shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Address</h4>
                    <p className="text-xs text-brand-charcoal dark:text-white font-medium mt-1">
                      info@skinovations.com.pk
                    </p>
                  </div>
                </div>

                {/* Info Item 4: Timings */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white dark:bg-[#1B201A] border border-brand-olive/10 dark:border-brand-gold/15 text-brand-olive dark:text-brand-gold-light rounded-xl shadow-sm shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Working Hours</h4>
                    <p className="text-xs text-brand-charcoal dark:text-white font-medium mt-1">
                      Monday &ndash; Saturday: 10:00 AM &ndash; 10:00 PM
                    </p>
                    <p className="text-xs text-red-500 font-semibold mt-0.5">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 w-full">
              <BookingForm selectedTreatment={selectedTreatment} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust elements SSL/Security Row */}
      <section className="bg-zinc-100 dark:bg-[#121611]/80 py-8 border-y border-zinc-200/50 dark:border-zinc-900/60 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
              <Lock className="w-4.5 h-4.5 text-green-600" />
              Secure 256-bit SSL Consultation Booking
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
              <Award className="w-4.5 h-4.5 text-brand-gold" />
              Top Rated Aesthetic Clinic Rawalpindi
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
            <span>Follow us:</span>
            <a
              href="https://facebook.com/Skinovations-Laser-Skin-Clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brand-olive dark:hover:text-brand-gold transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/skinovationslaserskinclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brand-olive dark:hover:text-brand-gold transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-brand-charcoal dark:bg-[#0B0D0A] text-zinc-400 pt-16 pb-8 border-t border-brand-olive/15 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
            {/* Col 1: About */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                {/* SVG Emblem for Footer */}
                <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center overflow-hidden">
                  <Image src="/favicon.ico" width={24} height={24} alt="SkinOvationS icon" className="object-contain" />
                </div>
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Skin<span className="text-brand-gold">OvationS</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed max-w-sm">
                SkinOvationS Laser, Skin & Hair Transplant Clinic is your trusted partner for premium, dermatologist-approved aesthetic treatments in Satellite Town, Rawalpindi.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollToSection("#home"); }} className="hover:text-brand-gold transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollToSection("#home"); }} className="hover:text-brand-gold transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#treatments" onClick={(e) => { e.preventDefault(); handleScrollToSection("#treatments"); }} className="hover:text-brand-gold transition-colors">Treatments</a>
                </li>
                <li>
                  <a href="#gallery" onClick={(e) => { e.preventDefault(); handleScrollToSection("#gallery"); }} className="hover:text-brand-gold transition-colors">Before & After</a>
                </li>
              </ul>
            </div>

            {/* Col 3: Treatments Shortcuts */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Treatments</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#treatments" onClick={(e) => { e.preventDefault(); handleScrollToSection("#treatments"); }} className="hover:text-brand-gold transition-colors">FUE Hair Transplant</a>
                </li>
                <li>
                  <a href="#treatments" onClick={(e) => { e.preventDefault(); handleScrollToSection("#treatments"); }} className="hover:text-brand-gold transition-colors">Pico Laser Melasma Treatment</a>
                </li>
                <li>
                  <a href="#treatments" onClick={(e) => { e.preventDefault(); handleScrollToSection("#treatments"); }} className="hover:text-brand-gold transition-colors">Exosomes Regeneration</a>
                </li>
                <li>
                  <a href="#treatments" onClick={(e) => { e.preventDefault(); handleScrollToSection("#treatments"); }} className="hover:text-brand-gold transition-colors">PRP Microneedling</a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Shortcuts */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Info</h4>
              <p className="text-xs leading-relaxed">
                D-1025, College Chowk, Al Hafeez Plaza, Saidpur Rd, Rawalpindi
              </p>
              <div className="text-xs space-y-1">
                <span className="block">Ph: 0309 5785647</span>
                <span className="block">WhatsApp: 0321 5660142</span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px]">
            <span>&copy; {new Date().getFullYear()} SkinOvationS Clinic. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#home" className="hover:underline hover:text-white transition-colors">Privacy Policy</a>
              <a href="#home" className="hover:underline hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <WhatsAppButton />
    </div>
  );
}
