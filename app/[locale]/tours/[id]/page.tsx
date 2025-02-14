import React from 'react';

import { tours } from '@/data/tours'
import Link from 'next/link';


import { AnimatedGallery } from '@/components/AnimatedGallery';
import { formatCurrency } from '@/utils/formatCurrency';
import { getTranslations, getLocale } from 'next-intl/server';


export async function generateStaticParams() {
  return tours.map((tour) => ({ id: tour.id }))
}



export default async function ToursDetails({ params, }: { params: Promise<{ id: string }> }) {
  const currentLocale = await getLocale()
  const id = (await params).id
  const t = await getTranslations("ToursDetails")

  const tour = tours.find((tour) => tour.id === id)

  if (!tour || !tour.enabled) {
    return (
      <div className='min-h-screen'>
        <p>Not found!</p>
      </div>)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        <div>
          <Link href='/tours'>{ t('goBack') }</Link>
        </div>
        <h1 className="text-4xl font-bold text-center my-8">
          {tour.title[currentLocale]}
        </h1>
        <div className="text-center dark:text-gray-300 mb-8">
          {tour.long_description[currentLocale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div>
          <p><b>{t('whatIsIncluded')}:</b> { tour.includes[currentLocale] }</p>

          { tour.price ? <p><b>{t('price')}: </b> { formatCurrency(tour.price, 'es-CL', 'CLP')}</p>: <></>}
          
          <p><b>{t('seats')}: </b> {tour.seats}</p>
          <p><b>{t('departingPlace')}:</b> {tour.departing_place}</p>
          <p><b>{t('departingTime')}:</b> { tour.departing_time ? tour.departing_time : t('toBeDefined') }</p>
        </div>
        <AnimatedGallery images={tour.gallery} subpath='tours' locale={currentLocale} />
      </main>
    </div>
  );
};
