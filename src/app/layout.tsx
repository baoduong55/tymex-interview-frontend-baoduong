import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tymex Marketplace",
    template: "%s | Tymex Marketplace"
  },
  description: "Discover and trade digital assets on Tymex Marketplace - Your trusted platform for secure and efficient digital asset trading.",
  keywords: ["digital assets", "marketplace", "trading", "crypto", "blockchain"],
  authors: [{ name: "Tymex" }],
  creator: "Tymex",
  publisher: "Tymex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tymex.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tymex.com',
    siteName: 'Tymex Marketplace',
    title: 'Tymex Marketplace',
    description: 'Discover and trade digital assets on Tymex Marketplace',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tymex Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tymex Marketplace',
    description: 'Discover and trade digital assets on Tymex Marketplace',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
