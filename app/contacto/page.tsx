import React from 'react';
import Link from 'next/link';


const Contact = () => {

  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Contáctanos!
        </h1>
        <p className="text-center dark:text-gray-300 mb-8">
          Por ahora la mejor forma de contactarnos es mediante WhatsApp.
        </p>
        <div className='flex justify-center'>
          <Link
            href="https://wa.me/+56974062175"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Envíanos un mensaje
          </Link>
        </div>
        <div className='flex justify-center'>
          <p>O</p>
        </div>
        <div className='flex justify-center'>
          <Link
            href={'mailto:lucumilloexperience@gmail.com'}
            className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Escribenos un email
          </Link>
        </div>
      </main>


    </div>
  );
};

export default Contact;