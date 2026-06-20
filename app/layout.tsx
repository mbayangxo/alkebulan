import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alkebulan — Africa is the Opportunity",
  description:
    "The African Opportunity Engine. Discover grants, loans, tenders, accelerators, and government programs built for Africans, African diaspora, women entrepreneurs, and young founders.",
  keywords: ["Africa grants", "African funding", "African entrepreneurs", "diaspora investment", "AfCFTA", "African opportunity"],
  openGraph: {
    title: "Alkebulan — Africa is the Opportunity",
    description: "Find every grant, loan, tender, and program built for you across Africa.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#C9A035",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jost.variable} h-full antialiased`}>
      <body className="min-h-full text-ink bg-ivory">
        {children}
      </body>
    </html>
  );
}
