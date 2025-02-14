import { AnimatedGallery } from "@/components/AnimatedGallery";

import { bicycles } from "@/data/bicycles";
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";

const ArriendoDeBicicletas = () => {


    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow container mx-auto p-4">
                <div>
                    <Link href='/'>Volver al inicio</Link>
                </div>
                <h1 className="text-4xl font-bold my-8">Arriendo de Bicicletas</h1>
                <p className="mb-4">
                    Descubre La Serena en una de nuestras bicicletas, un destino muy popular es recorrer la avenida del Mar, que está a unos cinco minutos.
                </p>
                <p><b>Precio:</b> {formatCurrency(bicycles.price, 'es-CL', 'CLP')} por hora</p>
                <p><b>Incluye:</b> {bicycles.includes}</p>
                <p><b>Lugar:</b> {bicycles.retrieving_place}</p>
                <AnimatedGallery images={bicycles.gallery} subpath="bicycles" />
            </div>
        </div>

    );
};

export default ArriendoDeBicicletas;
