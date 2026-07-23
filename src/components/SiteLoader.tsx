"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, animate } from "framer-motion";
import logoImg from "../../public/logo.jpg";

export default function SiteLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Smoothly drives the countdown from 0 to 100 matching your 1400ms duration
    const controls = animate(0, 100, {
      duration: 1.4,
      ease: "easeInOut",
      onUpdate: (latest) => setProgress(Math.round(latest)),
      onComplete: () => {
        // A tiny delay at 100% gives the user a moment to register completion
        setTimeout(() => setVisible(false), 200);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white p-4 dark:bg-neutral-950"
          role="status"
          aria-label="Loading SkinOvationS"
          aria-live="polite"
        >
          <div className="flex w-full max-w-[240px] flex-col items-center">
            
            {/* Logo Wrapper with a subtle scale & fade entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-6 h-24 w-24 overflow-hidden rounded-full border border-neutral-100 shadow-sm dark:border-neutral-800"
            >
              <Image
                src={logoImg}
                alt="SkinOvationS Logo"
                fill
                priority
                className="object-cover"
                placeholder="blur" // Uses Next.js built-in blur effect while loading the raw file
              />
            </motion.div>

            {/* Progress Bar Track */}
            <div className="mb-2 h-[3px] w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
              <motion.div
                className="h-full bg-neutral-900 origin-left dark:bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Progress Text */}
            <motion.span 
              className="text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500 tabular-nums uppercase"
            >
              {progress}%
            </motion.span>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}