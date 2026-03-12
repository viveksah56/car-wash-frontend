import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootProviders from "@/Provider/root-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Wash - Professional Cleaning Services",
  description: "Premium car wash and detailing services with professional staff scheduling and booking management system.",
  keywords: ["car wash", "auto detailing", "cleaning services", "professional car care"],
  authors: [{ name: "Car Wash" }],
  creator: "Car Wash Team",
  publisher: "Car Wash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carwash.com",
    siteName: "Car Wash",
    title: "Car Wash - Professional Cleaning Services",
    description: "Premium car wash and detailing services with professional staff scheduling and booking management system.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-scrool-smooth>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <RootProviders>
        {children}
      </RootProviders>
      </body>
    </html>
  );
}
