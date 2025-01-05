import React from 'react';
import Image from 'next/image';

import { tours } from '../../../data/tours'
import Link from 'next/link';

export default async function HomePage({ params, }: { params: Promise<{ id: number }> }) {
  
  const id = (await params).id

  const tour = tours.find((tour) => tour.id === Number(id))
  
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
          { tour.title }
        </h1>
        <p className="text-center text-gray-300 mb-8">
          {tour.description}
        </p>
        <div className='flex justify-center'>
        <Image
          src={tour.image}
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