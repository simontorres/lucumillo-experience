import { BicycleRental } from "@/interfaces";

export const bicycles: BicycleRental =
{
    includes: 'Bicicleta aro 27, casco, candado y luces.',
    price: 2500,
    gallery: [
        { src: 'bicycles_001.webp', alt: 'En algun lugar de La Serena' },
        { src: 'bicycles_002.webp', alt: 'En la avenida Francisco de Aguirre' },
   
    ],
    retrieving_place: 'Hostal Luna Del Mar, Isabel Riquelme 840, La Serena',
    enabled: true
}
