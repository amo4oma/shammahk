"use client";
import type { Metadata } from "next";
import { Beiruti } from 'next/font/google';
import './globals.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
const beiruti = Beiruti({
  subsets: ['arabic', 'latin'], // Beiruti supports both
  weight: ['400', '700'],       // Choose the weights you need
  variable: '--font-beiruti',   // Define the CSS variable
  display: 'swap',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beiruti.variable} ${beiruti.variable} antialiased bg-white!`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
