import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RideNow - Get a ride in minutes",
  description: "Quick, reliable, and affordable ride-hailing service. Request a ride, get matched with nearby drivers, and arrive safely at your destination.",
  keywords: "ride sharing, taxi service, transportation, ride hailing, uber alternative",
  authors: [{ name: "RideNow" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "RideNow - Get a ride in minutes",
    description: "Quick, reliable, and affordable ride-hailing service.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RideNow - Get a ride in minutes",
    description: "Quick, reliable, and affordable ride-hailing service.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}