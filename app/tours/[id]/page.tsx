import React from 'react';
import Image from 'next/image';

import { tours } from '../../../data/tours'
import Link from 'next/link';

export async function generateStaticParams() {
  return tours.map((tour) => ({ id: tour.id }))
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
          {tour.description}
        </p>
        <div className='flex justify-center'>
          <Image
            src={`/images/tours/${tour.image}`}
            alt={tour.title}
            width={480}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </main>
    </div>
  );
};