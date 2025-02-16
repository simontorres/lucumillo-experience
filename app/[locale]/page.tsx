"use client";
import React from "react";
import { ServiceCard } from "@/components/ServiceCard";

import { services } from "@/data/services";
import SocialLinks from "@/components/SocialLinks";
import { useTranslations } from "next-intl";


const HomePage = () => {
  const t = useTranslations("HomePage")
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">
          {t('title')}
        </h1>
        <p className="text-center dark:text-gray-300 mb-8">
          {t('summary')}
        </p>
        <SocialLinks />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {services
            .filter((service) => service.enabled)
            .map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
        </div>
        
      </main>
    </div>
  );
};

export default HomePage;
