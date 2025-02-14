import { Service } from "@/interfaces";

export const services: Service[] = [
  {
    id: "1",
    title: {
      en: "Tours",
      es: "Tours"
    },
    description: {
      en: "Explore unique experiences, from stargazing to birdwatching and cultural journeys.",
      es: "Explora experiencias únicas, desde la observación de estrellas hasta el avistamiento de aves y recorridos culturales."
    },
    path: "tours",
    gallery: [
      {
        src: "/images/services/xs/nightsky_001.webp",
        alt: {
          en: "The south celestial pole photographed over three hours.",
          es: "El polo sur celeste fotografiado durante tres horas."
        }
      },
      {
        src: "/images/services/xs/nightsky_002.webp",
        alt: {
          en: "Stunning view of the Milky Way from Elqui Valley.", 
          es: "Impresionante vista de la Vía Láctea desde el Valle de Elqui."
        }
      },
      {
        src: "/images/services/xs/nightsky_003_2.webp",
        alt: {
          en: "Telescope under a starry sky.", 
          es: "Telescopio bajo un cielo estrellado."
        }
      },
      {
        src: "/images/services/xs/whales_003.webp",
        alt: {
          en: "Humpback whale breaching near the coast.", 
          es: "Ballena jorobada saltando cerca de la costa."
        }
      },
      {
        src: "/images/services/xs/whales_004.webp",
        alt: {
          en: "A whale fluke diving into the ocean.", 
          es: "Una cola de ballena sumergiéndose en el océano."
        }
      },
      {
        src: "/images/services/xs/elqui_valley_001.webp",
        alt: {
          en: "Montegrande, home of Nobel laureate Gabriela Mistral.", 
          es: "Montegrande, hogar de la premio Nobel Gabriela Mistral."
        }
      },
      {
        src: "/images/services/xs/birdwatching_003.webp",
        alt: {
          en: "Tufted Tit-Tyrant perching on an old branch.", 
          es: "Titira de cresta blanca posada en una rama vieja."
        }
      },
      {
        src: "/images/services/xs/something_else_002.webp",
        alt: {
          en: "Beautiful sunset in La Serena with Coquimbo in the background.", 
          es: "Hermoso atardecer en La Serena con Coquimbo de fondo."
        }
      }
    ],
    enabled: true,
  },
  {
    id: "2",
    title: {
      en: "Bike Rental",
      es: "Arriendo de Bicicletas"
    },
    description: {
      en: "Explore the region at your own pace with our high-quality bike rentals.",
      es: "Explora la región a tu propio ritmo con nuestro arriendo de bicicletas de alta calidad."
    },
    path: "arriendo-de-bicicletas",
    gallery: [
      {
        src: "/images/services/xs/bicycles_001.webp",
        alt: {
          en: "Mountain bikes ready for an adventure.",
          es: "Bicicletas de montaña listas para la aventura."
        }
      },
      {
        src: "/images/services/xs/bicycles_002.webp",
        alt: {
          en: "Cycling through scenic landscapes.",
          es: "Pedaleando por paisajes escénicos."
        }
      }
    ],
    enabled: true,
},
];