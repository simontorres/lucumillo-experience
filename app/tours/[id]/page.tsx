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
          <Link href='/'>Back to Tours</Link>
        </div>
        <h1 className="text-4xl font-bold text-center my-8">
          {tour.title}
        </h1>
        <p className="text-center text-gray-300 mb-8">
          {tour.description}
        </p>
        <div className='flex justify-center'>
          <figure>
            <Image
              src={`/images/tours/md/${tour.image}`}
              alt={tour.title}
              width={480}
              height={600}
              className="w-full object-cover"
            />
            {
              tour.image_caption
                ? <figcaption>{tour.image_caption}</figcaption>
                : <></>
            }
            
          </figure>
        </div>
      </main>
    </div>
  );
};
