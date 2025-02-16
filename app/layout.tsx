import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { OurPartnersAndFriends } from "@/components/OurPartnersAndFriends";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucumillo Experience",
  description: "Personalized Tours in La Serena",
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
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              if (
                theme === 'dark' || 
                (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
              ) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `
        }} />
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <Navbar />
       
          {/* Main Content */}
          {children}
          {/* Call to Action */}
          <div className="bg-green-500 text-white p-4 text-center">
            <p className="text-lg md:text-xl">
              Interesado en nuestros tours?{' '}
              
            </p>
            <a
                href="https://wa.me/+56974062175"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                Contáctanos por WhatsApp
              </a>
          </div>
          <FloatingWhatsAppButton />
          <OurPartnersAndFriends />

          {/* Footer */}
          <footer className="bg-orange-500 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Lucumillo Experience. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
