import { AnimatedGallery } from "@/components/AnimatedGallery";

import { bicycles } from "@/data/bicycles";
import { formatCurrency } from "@/utils/formatCurrency";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

const ArriendoDeBicicletas = async () => {
    const t = await getTranslations("BikeRental")
    const currentLocale = await getLocale()



    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow container mx-auto p-4">
                <div>
                    <Link href='/'>{t('goBack')}</Link>
                </div>
                <h1 className="text-4xl font-bold my-8">{t('title')}</h1>
                <p className="mb-4">
                {t('summary')}
                </p>
                <p><b>{t('price')}:</b> {formatCurrency(bicycles.price, 'es-CL', 'CLP')} { t('perHour')}</p>
                <p><b>{t('whatIsIncluded')}:</b> {bicycles.includes[currentLocale]}</p>
                <p><b>{t('where')}:</b> {bicycles.retrieving_place}</p>
                <AnimatedGallery images={bicycles.gallery} subpath="bicycles" locale={currentLocale} />
            </div>
        </div>

    );
};

export default ArriendoDeBicicletas;
