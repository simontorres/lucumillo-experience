import React from 'react';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';
import { FaWhatsapp } from "react-icons/fa";

import { socials } from '@/data/socials';
import { Social } from '@/interfaces';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations("ContactPage")
  const whatsapp: Social | undefined = socials.find(social => social.name === 'whatsapp')

  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">
          {t('title')}
        </h1>
        <p className="text-center dark:text-gray-300 mb-8">
          {t('subtitle')}
        </p>
        {whatsapp ?
          <div className='flex flex-column justify-center'>
            <Link
              href={whatsapp.full_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
            >
              <FaWhatsapp size={28} /> <span>{t('sendUsMessages')}</span>
            </Link>
          </div>
          : <></>
        }

        <div className='flex justify-center'>
          <p>O</p>
        </div>
        <div className='flex justify-center'>
          <Link
            href={'mailto:lucumilloexperience@gmail.com'}
            className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {t('writeUsAnEmail')}
          </Link>
        </div>
        <div className='flex justify-center mt-3'>
          {/* Or find us in our social networks. */}
          <SocialLinks />
        </div>
      </main>


    </div>
  );
};

export default Contact;