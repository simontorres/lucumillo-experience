// app/page.tsx
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { tours } from '../../page'


const HomePage = ({ params: { id }}) => {

  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Contact Us { id }
        </h1>
        <p className="text-center text-gray-300 mb-8">
          For now, the best way to contact us is to our whatsapp number.
        </p>
        <div className='flex justify-center'>
          <Link
            href="https://wa.me/+56989404684"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send us a message
          </Link>

        </div>
      </main>


    </div>
  );
};

export default HomePage;