import React from 'react';


const About = () => {

  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow container mx-auto p-4">
        <div className='p-4'>
          <h1 className="text-justify text-3xl font-bold my-8">
            Lucumillo Experience
          </h1>
          <p className="text-justify text-gray-300 mb-8">
            We offer personalized tours to whale watching and to see the night sky in northern Chile.
          </p>
        </div>

        <div className='mb-8 p-4'>
          <h2 className='text-justify text-2xl font-bold'>Why Lucumillo?</h2>
          <p className='text-justify text-lg text-gray-300'>
            The name Lucumillo comes from Myrcianthes coquimbensis, a rare and endangered
            bush native to the coastal deserts of Chile. Its narrow distribution spans
            only a few hundred kilometers in the Coquimbo region, where it grows among
            large granite boulders, nourished by cool, moist breezes from the Pacific Ocean.
            The Lucumillo bush is deeply tied to this unique ecosystem,
            relying on specific environmental conditions and facing threats from
            habitat loss due to urban development and tourism.
          </p>
          <p className='text-justify text-lg text-gray-300'>
            We chose this name to honor the resilience of the Lucumillo, which,
            despite its fragility, thrives in the harsh conditions of the Chilean coastal desert.
            By adopting this name, we hope to raise awareness about the importance of
            conserving both the species and its delicate habitat. In doing so, we aim to contribute to
            the protection of this remarkable part of Chile’s natural heritage.
          </p>
        </div>

        {/* OUR GUIDES */}

        <div className='mb-8 p-4'>
          <h2 className='text-justify text-2xl font-bold'>Our Guides</h2>
          <p>We primarily collaborate with local, specialized guides provided by
            the sites we visit, ensuring you benefit from authentic, insider
            knowledge. Additionally, our team includes guides with diverse
            specialties and interests, ranging from wildlife enthusiasts to
            astronomy experts, who are passionate about sharing their unique
            perspectives and expertise. Together, we aim to provide you with a
            deeper connection to the places you explore.</p>

        </div>

      </main>


    </div>
  );
};

export default About;