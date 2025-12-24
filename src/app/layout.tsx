import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import AccessibilityWidget from "@/components/AccessibilityWidget";

export const metadata: Metadata = {
  title: "AwnGuard: Clean Awnings, Solar Panels, Power Washing, Window Washing",
  description: "AwnGuard: Clean awnings, solar panel cleaning, power washing, window washing. Commercial properties in San Diego, Orange County, and Riverside County. Request a quote now!",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <AccessibilityWidget />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
