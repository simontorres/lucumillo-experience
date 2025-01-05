import React from 'react';
import { guides } from '@/data/guides';


const HomePage = () => {

  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold my-8">
          Lucumillo Experience
        </h1>
        <p className="text-gray-300 mb-8">
          We offer personalized tours to whale watching and to see the night sky in northern Chile.
        </p>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold'>Why Lucumillo?</h2>
          <p className='text-lg text-gray-300'>Lucumillo (Myrcianthes coquimbensis) is an endemic bush 
            classified as <b>Endangered</b> its distribution comprises only a few 
            hundred kilometers.
          </p>
          <p className='text-lg text-gray-300'> By naming us this way, we want to honor the resilience of this bush, also 
          we aim to help protecting it by raising awareness about its fragility to its ever reducing habitat.

          </p>
        </div>

        {/* OUR GUIDES */}

        <div className='mb-8'>
          <h2 className='text-2xl font-bold'>Our Guides</h2>

          {guides.map(guide => (
            <div key={guide.id} className='rounded-lg shadow-lg overflow-hidden'>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{guide.name}</h2>
                <p className="text-gray-300">{guide.bio}</p>
              </div>
            </div>
          ))}


        </div>
        
      </main>

      
    </div>
  );
};

export default HomePage;