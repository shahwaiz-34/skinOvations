
"use client";

import { useEffect, useState } from "react";
import DiscountPopup from "./DiscountPopup";

const DISPLAY_DELAY = 10_000;

export default function DelayedDiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), DISPLAY_DELAY);
    return () => window.clearTimeout(timer);
  }, []);

  return isOpen ? <DiscountPopup /> : null;
}