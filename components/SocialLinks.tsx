import React, { JSX } from "react";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

import { socials } from "@/data/socials";

const iconMap: Record<string, JSX.Element> = {
    instagram: <FaInstagram size={28} />,
    whatsapp: <FaWhatsapp size={28} />,
    tiktok: <FaTiktok size={28} />,
};

const SocialLinks = () => {
    return (
        <div className="flex gap-4 justify-center my-6">
            {/* Instagram */}
            {socials
                .filter((social) => social.enabled)
                .map(social => (
                    <a
                        key={social.name}
                        href={social.full_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 dark:text-white hover:text-lime-600 transition"
                        aria-label={social.name}
                    >
                        {iconMap[social.name.toLowerCase()] || null}

                    </a>
                ))}

        </div>
    );
};

export default SocialLinks;
