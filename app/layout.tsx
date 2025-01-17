import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <nav className="bg-lime-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/">
                <p className="text-2xl font-bold">Lucumillo Experience</p>
              </Link>
              <div className='flex'>
                <Link href="/about">
                  <p className="px-4">About</p>
                </Link>
                <Link href="/contact">
                  <p className="px-4">Contact</p>
                </Link>
              </div>
            </div>
          </nav>
          {/* Main Content */}
          {children}
          {/* Call to Action */}
          <div className="bg-green-500 text-white p-4 text-center">
            <p className="text-lg md:text-xl">
              Interested in our tours?{' '}
              
            </p>
            <a
                href="https://wa.me/+56989404684"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                Contact us on WhatsApp
              </a>
          </div>

          {/* Footer */}
          <footer className="bg-orange-500 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Lucumillo Experience. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
