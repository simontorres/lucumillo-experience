"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Service } from "@/interfaces";
import { useLocale } from "next-intl";


export const ServiceCard = ({ service }: { service: Service}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLocale = useLocale()
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % service.gallery.length);
      }, 4000); // Change image every 2 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [service.gallery.length]);
  
    return (
      <Link href={service.path} className="h-full">
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full max-w-[480px] mx-auto">
          <Image
            src={service.gallery[currentIndex].src}
            alt={service.gallery[currentIndex].alt}
            width={480}
            height={400}
            className="w-full h-80 object-cover transition-opacity duration-500"
          />
          <div className="p-4 flex-grow flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{service.title[currentLocale]}</h2>
            <p className="dark:text-gray-300 flex-grow">{service.description[currentLocale]}</p>
          </div>
        </div>
      </Link>
    );
  };
  