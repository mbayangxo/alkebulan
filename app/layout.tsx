import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PWARegister } from "@/app/components/pwa-register";
import { LocaleProvider } from "@/app/components/locale-context";
import { LanguageBar } from "@/app/components/language-bar";
import { ProfileProvider, ProfileSetupModal, ProfileBadge } from "@/app/components/user-profile";
import { ReportBug } from "@/app/components/report-bug";
import { MobileBottomNav } from "@/app/components/mobile-nav";
import { EducationProvider } from "@/app/components/education-system";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kebu — Africa is the Opportunity",
  description:
    "Africa has the resources. Africa has the youth. Africa has the ideas. Kebu opens your eyes to what is already in front of you — the businesses to build, the problems that are markets, and the tools that already exist to help you build them.",
  keywords: ["African opportunity", "African entrepreneurs", "Africa business", "diaspora Africa", "AfCFTA", "African markets", "build in Africa"],
  openGraph: {
    title: "Kebu — Africa is the Opportunity",
    description: "What can we do as a people? Everything. Here is what is already in front of you.",
    type: "website",
    siteName: "Kebu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kebu — Africa is the Opportunity",
    description: "What can we do as a people? Everything. Here is what is already in front of you.",
  },
};

export const viewport: Viewport = {
  themeColor: "#E05A18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jakarta.variable} h-full antialiased`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full text-ink bg-ivory">
        <PWARegister />
        <ProfileProvider>
          <LocaleProvider>
            <EducationProvider>
              <LanguageBar />
              {children}
              <ProfileSetupModal />
              <ProfileBadge />
              <ReportBug />
              <MobileBottomNav />
            </EducationProvider>
          </LocaleProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
