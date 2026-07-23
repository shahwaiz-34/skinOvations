import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import SiteLoader from "../components/SiteLoader";
import "./globals.css";
import DiscountPopup from "@/components/DiscountPopup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SkinOvationS | Hair Transplant, Laser & Skin Clinic Rawalpindi",
  description: "Reveal your natural beauty at SkinOvationS Clinic Rawalpindi & Islamabad. Leading specialists in FUE & DHI Hair Transplant, Exosomes, Botox, Fillers, Laser Hair Removal, and advanced skincare.",
  keywords: "SkinOvationS, Hair Transplant Islamabad, Hair Transplant Rawalpindi, Laser Clinic Rawalpindi, Botox, Fillers, HydraFacial, PRP, Microneedling, Exosomes Hair and Skin, CO2 Fractional Laser, Melasma Treatment, Dr Abdul Khaliq",
  authors: [{ name: "SkinOvationS" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased text-foreground bg-background">
        <SiteLoader />
        <Toaster position="top-right" richColors />
        <DiscountPopup />
        {children}
      </body>
    </html>
  );
}
