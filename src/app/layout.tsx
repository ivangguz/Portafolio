import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <head>
        <title>Portafolio</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-bg`}>
        <Providers>
          <Navbar />
          <div className="bg-custom-bg min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
