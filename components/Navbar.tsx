"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <nav className="bg-lime-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo & Desktop Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/">
            <p className="text-2xl font-bold cursor-pointer">{t("brand")}</p>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-4">
            <Link href="/tours" className="hover:underline">{t("tours")}</Link>
            <Link href="/arriendo-de-bicicletas" className="hover:underline">{t("bikeRental")}</Link>
            <Link href="/nosotros" className="hover:underline">{t("about")}</Link>
            <Link href="/contacto" className="hover:underline">{t("contact")}</Link>
          </div>
        </div>

        {/* Right Section: Theme Toggle & Language Switcher */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border border-white rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-lime-600 shadow-lg">
          <Link href="/tours" className="block px-4 py-2 hover:bg-lime-700">{t("tours")}</Link>
          <Link href="/arriendo-de-bicicletas" className="block px-4 py-2 hover:bg-lime-700">{t("bikeRental")}</Link>
          <Link href="/nosotros" className="block px-4 py-2 hover:bg-lime-700">{t("about")}</Link>
          <Link href="/contacto" className="block px-4 py-2 hover:bg-lime-700">{t("contact")}</Link>
          
          {/* Language Switcher inside mobile menu */}
          <div className="flex justify-center py-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
