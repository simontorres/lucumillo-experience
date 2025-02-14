import { BicycleRental } from "@/interfaces";

export const bicycles: BicycleRental =
{
    includes: {
        en: "27-inch wheel bicycle, helmet, lock, and lights.",
        es: "Bicicleta aro 27, casco, candado y luces."
    },
    price: 2500,
    gallery: [
        { src: "bicycles_001.webp", alt: { en: "Somewhere in La Serena", es: "En algún lugar de La Serena" } },
        { src: "bicycles_002.webp", alt: { en: "On Francisco de Aguirre Avenue", es: "En la avenida Francisco de Aguirre" } }
    ],
    retrieving_place: "Hostal Luna Del Mar, Isabel Riquelme 840, La Serena",
    enabled: true
}
