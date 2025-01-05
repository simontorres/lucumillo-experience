// app/page.tsx
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { tours } from '../data/tours'

const HomePage = () => {

  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Welcome to Lucumillo Experience
        </h1>
        <p className="text-center text-gray-300 mb-8">
          We offer personalized tours to whale watching and to see the night sky in northern Chile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map(tour => (
            <Link key={tour.id} href={`/tours/${tour.id}`}>
              <div key={tour.id} className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/tours/${tour.image}`}
                  alt={tour.title}
                  width={480}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2">{tour.title}</h2>
                  <p className="text-gray-300">{tour.description}</p>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </main>


    </div>
  );
};

export default HomePage;