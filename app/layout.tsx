export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSarif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-plx-sarif",
  weight : ['400', '700']
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform.",
  icons: {
    icon : '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSarif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
