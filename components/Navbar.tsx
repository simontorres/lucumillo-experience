"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-lime-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <p className="text-2xl font-bold cursor-pointer">Lucumillo Experience</p>
        </Link>

        {/* Hamburger Button */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full bg-lime-600 md:bg-transparent md:w-auto`}
        >
          <Link href="/about">
            <p className="px-4 py-2 md:py-0 hover:bg-lime-700 md:hover:bg-transparent md:hover:underline">
              About
            </p>
          </Link>
          <Link href="/contact">
            <p className="px-4 py-2 md:py-0 hover:bg-lime-700 md:hover:bg-transparent md:hover:underline">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
