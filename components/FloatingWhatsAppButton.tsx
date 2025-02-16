"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  // Calculate positioning based on screen size
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  // Calculate positions
  const bottomPosition = "75%"; // 1/4 from the bottom (3/4 from the top)
  const rightPosition = isDesktop ? "3rem" : "1rem"; // Slightly inset on desktop

  return (
    <div
      className="fixed z-50"
      style={{
        top: bottomPosition,
        right: rightPosition,
      }}
    >
      <a
        href="https://wa.me/+56974062175"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
