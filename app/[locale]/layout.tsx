import type { Metadata } from "next";
import "@/app/globals.css";

import Navbar from "@/components/Navbar";
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Lucumillo Experience",
  description: "Personalized Tours in La Serena",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
}>) {
  const locale = (await params).locale
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
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

          {/* Footer */}
          <footer className="bg-orange-500 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Lucumillo Experience. All rights reserved.</p>
          </footer>
        </div>
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}
