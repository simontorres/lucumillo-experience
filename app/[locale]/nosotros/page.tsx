import { useTranslations } from 'next-intl';
import React from 'react';

const About = () => {
  const t = useTranslations("AboutPage")

  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow container mx-auto p-4">
        <div className='p-4'>
          <h1 className="text-justify text-3xl font-bold my-8">
            {t('title')}
          </h1>
          <p className="text-justify dark:text-gray-300 mb-8">
          {t('introduction')}
          </p>
        </div>

        <div className='mb-8 p-4'>
          <h2 className='text-justify text-2xl font-bold'>{t('whyLucumillo')}</h2>
          <p className='text-justify text-lg dark:text-gray-300'>
          {t('aboutLucumillo1')}
          </p>
          <p className='text-justify text-lg dark:text-gray-300'>
          {t('aboutLucumillo2')}
          </p>
        </div>

        {/* OUR GUIDES */}

        <div className='mb-8 p-4'>
          <h2 className='text-justify text-2xl font-bold'>{t('ourGuidesTitle')}</h2>
          <p>{t('ourGuidesDescription')}</p>
        </div>

      </main>


    </div>
  );
};

export default About;
