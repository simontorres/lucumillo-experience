// app/page.tsx
import React from 'react';

import { tours } from '@/data/tours'
import ToursGrid from '@/components/ToursGrid';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

const ToursIndex = async () => {
  const t = await getTranslations("ToursIndex")
  const currentLocale = await getLocale()
  return (
    
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow container mx-auto p-4">
        <div>
          <Link href='/'>{t('goBack')}</Link>
        </div>
        <h1 className="text-4xl font-bold text-center my-8">
        {t('title')}
        </h1>
        <p className="text-center dark:text-gray-300 mb-8">
        {t('summary')}
        </p>
        <ToursGrid tours={tours} locale={currentLocale} />
      </main>


    </div>
  );
};

export default ToursIndex;
