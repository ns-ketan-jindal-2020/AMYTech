import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { PageTransition } from "@/components/page-transition";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "AMY Tech DMCC | Microsoft Partner for Digital Transformation",
  description:
    "A modern corporate website built from the AMY Tech DMCC presentation, covering Dynamics 365, Power Platform, AI, UX, and delivery services.",
  metadataBase: new URL("https://www.amytechdmcc.com"),
  openGraph: {
    title: "AMY Tech DMCC | Microsoft Partner for Digital Transformation",
    description:
      "A modern corporate website built from the AMY Tech DMCC presentation, covering Dynamics 365, Power Platform, AI, UX, and delivery services.",
    url: "https://www.amytechdmcc.com",
    siteName: "AMY Tech DMCC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMY Tech DMCC | Microsoft Partner for Digital Transformation",
    description:
      "A modern corporate website built from the AMY Tech DMCC presentation, covering Dynamics 365, Power Platform, AI, UX, and delivery services.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} bg-background font-body text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
