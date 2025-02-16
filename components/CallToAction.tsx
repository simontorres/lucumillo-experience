import { useTranslations } from 'next-intl'
import React from 'react'

export const CallToAction = () => {
    const t = useTranslations("CallToAction")
    return (
        <div className="bg-green-500 text-white p-4 text-center">
            <p className="text-lg md:text-xl">
                {t('interestedInTours')}

            </p>
            <a
                href="https://wa.me/+56974062175"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
            >
                {t("contactUsWhatsapp")}
            </a>
        </div>

    )
}
