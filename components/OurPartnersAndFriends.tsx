import Image from 'next/image';
import React from 'react';

interface Partner {
    name: string;
    logo: string;
    website: string;
}

const partners: Partner[] = [
    { name: "Hostal Luna del Mar", logo: "https://placehold.co/300", website: "https://partner1.com" },
    { name: "Arena Cafe", logo: "https://placehold.co/300", website: "https://www.instagram.com/arenacafelaserena" },
    // { name: "Partner Three", logo: "https://placehold.co/300", website: "https://partner3.com" },
];

export const OurPartnersAndFriends = () => {
    return (
        <section className="bg-sky-100 dark:bg-slate-700 dark:text-white p-6 h-64 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Socios y Amigos</h2>
            <div className="flex justify-evenly items-center gap-6 h-full">
                {partners.map((partner) => (
                    <a
                        key={partner.name}
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 hover:opacity-80"
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={300}
                            height={300}
                            className="w-20 h-20 object-contain"
                        />
                        <span className="text-sm text-center">{partner.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};
