import React from 'react';

import { tours } from '../../../data/tours'
import Link from 'next/link';


import { AnimatedGallery } from '@/components/AnimatedGallery';

export async function generateStaticParams() {
  return tours.map((tour) => ({ id: tour.id }))
}

function formatCurrency(value: number, locale: string, currency: string) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currency}).format(value)
}

export default async function Tours({ params, }: { params: Promise<{ id: string }> }) {

  const id = (await params).id

  const tour = tours.find((tour) => tour.id === id)

  if (!tour) {
    return <p>Not found!</p>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        <div>
          <Link href='/'>Back to Tours</Link>
        </div>
        <h1 className="text-4xl font-bold text-center my-8">
          {tour.title}
        </h1>
        <p className="text-center text-gray-300 mb-8">
          {tour.long_description}
        </p>
        <div>
          <p><b>Price: </b> { formatCurrency(tour.price, 'en-US', 'USD')}</p>
          <p><b>Seats: </b> { tour.seats }</p>
        </div>
        <AnimatedGallery images={tour.gallery}/>
      </main>
    </div>
  );
};
