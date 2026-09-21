import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SkipLink } from "@/components/navigation/skip-link";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { FloatingContact } from "@/components/contact/floating-contact";
import { profile } from "@/data/profile";
import {
  organizationJsonLd,
  personJsonLd,
  scholarlyArticlesJsonLd,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.site.title,
    template: `%s | ${profile.fullName}`,
  },
  description: profile.site.description,
  keywords: [...profile.site.keywords],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    type: "profile",
    locale: "en_KE",
    url: siteUrl,
    siteName: profile.fullName,
    title: profile.site.title,
    description: profile.site.description,
    images: [
      {
        url: "/images/photo1.jpeg",
        width: 800,
        height: 1000,
        alt: profile.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.site.title,
    description: profile.site.description,
    images: ["/images/photo1.jpeg"],
  },
  icons: {
    icon: [{ url: "/images/photo1.jpeg", type: "image/jpeg" }],
    apple: [{ url: "/images/photo1.jpeg", type: "image/jpeg" }],
    shortcut: ["/images/photo1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [personJsonLd(), organizationJsonLd(), ...scholarlyArticlesJsonLd()];

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <SkipLink />
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
