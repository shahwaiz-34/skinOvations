"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface SliderData {
  id: string;
  title: string;
  subtitle: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
}

const comparisonData: SliderData[] = [
  {
    id: "skin",
    title: "Laser Skin Resurfacing",
    subtitle: "Acne Scar & Melasma Treatment",
    beforeImg: "/skin_before.jpg",
    afterImg: "/skin_after.jpg",
    beforeLabel: "Before Treatment",
    afterLabel: "After 4 Sessions",
    description: "Our advanced Fractional CO2 and Pico Laser treatment targets deep scar tissue and pigmentation, stimulating collagen renewal for clear, flawless skin.",
  },
  {
    id: "hair",
    title: "FUE Hair Transplant",
    subtitle: "Natural Hairline Restoration",
    beforeImg: "/hair_before.jpg",
    afterImg: "/hair_after.jpg",
    beforeLabel: "Receding Hairline",
    afterLabel: "12 Months Post-Op",
    description: "High-density Follicular Unit Extraction (FUE) graft placement provides natural-looking, permanent hairline restoration with zero visible scarring.",
  },
];

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState<string>("skin");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeData = comparisonData.find((d) => d.id === activeTab) || comparisonData[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Category selector */}
      <div className="flex gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 mb-8 max-w-sm">
        {comparisonData.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveTab(category.id);
              setSliderPosition(50); // Reset position
            }}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === category.id
                ? "bg-brand-olive text-white shadow-md"
                : "text-zinc-600 dark:text-zinc-400 hover:text-brand-charcoal dark:hover:text-white"
            }`}
          >
            {category.title.split(" ")[0]} Treatment
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-5xl">
        {/* Description Section */}
        <div className="lg:col-span-4 space-y-4 animate-fade-in text-center lg:text-left">
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-brand-gold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 animate-pulse-subtle" /> Real Results
          </div>
          <h3 className="font-serif text-3xl font-bold tracking-tight text-brand-charcoal dark:text-white">
            {activeData.title}
          </h3>
          <p className="text-sm font-medium text-brand-olive dark:text-brand-gold-light tracking-wide">
            {activeData.subtitle}
          </p>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
            {activeData.description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-xs text-zinc-500">
            <div className="flex items-center gap-2 justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
              FDA Approved Equipment
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-olive"></span>
              Certified Clinicians
            </div>
          </div>
        </div>

        {/* Interactive Slider Container */}
        <div className="lg:col-span-8 flex justify-center w-full">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(78,94,68,0.15)] border border-brand-olive/5 cursor-ew-resize select-none max-w-2xl bg-zinc-200 dark:bg-zinc-800"
          >
            {/* After Image (Right Side, Full Width Background) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeData.afterImg}
              alt={activeData.afterLabel}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute bottom-4 right-4 bg-brand-charcoal/70 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 tracking-wide uppercase">
              {activeData.afterLabel}
            </div>

            {/* Before Image (Left Side, Clipped Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeData.beforeImg}
                alt={activeData.beforeLabel}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: containerRef.current?.getBoundingClientRect().width }}
              />
              <div className="absolute bottom-4 left-4 bg-brand-charcoal/70 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 tracking-wide uppercase">
                {activeData.beforeLabel}
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-colors duration-200">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
