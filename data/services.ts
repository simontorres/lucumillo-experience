import { Service } from "@/interfaces";

export const services: Service[] = [
  {
    id: "1",
    title: {
      en: "Tours",
      es: "Tours",
      de: "Touren",
      fr: "Circuits"
    },
    description: {
      en: "Explore unique experiences, from stargazing to birdwatching and cultural journeys.",
      es: "Explora experiencias únicas, desde la observación de estrellas hasta el avistamiento de aves y recorridos culturales.",
      de: "Erleben Sie einzigartige Erlebnisse, von Sternenbeobachtungen bis hin zu Vogelbeobachtungen und kulturellen Ausflügen.",
      fr: "Explorez des expériences uniques, de l'observation des étoiles à l'observation des oiseaux et aux voyages culturels."
    },
    path: "tours",
    gallery: [
      {
        src: "/images/services/xs/nightsky_001.webp",
        alt: {
          en: "The south celestial pole photographed over three hours.",
          es: "El polo sur celeste fotografiado durante tres horas.",
          de: "Der südliche Himmelspol, über drei Stunden fotografiert.",
          fr: "Le pôle céleste sud photographié pendant trois heures."
        }
      },
      {
        src: "/images/services/xs/nightsky_002.webp",
        alt: {
          en: "Stunning view of the Milky Way from Elqui Valley.",
          es: "Impresionante vista de la Vía Láctea desde el Valle de Elqui.",
          de: "Atemberaubender Blick auf die Milchstraße vom Elqui-Tal.",
          fr: "Vue imprenable sur la Voie lactée depuis la vallée de l'Elqui."
        }
      }
    ],
    enabled: true,
  },
  {
    id: "2",
    title: {
      en: "Bike Rental",
      es: "Arriendo de Bicicletas",
      de: "Fahrradverleih",
      fr: "Location de vélos"
    },
    description: {
      en: "Explore the region at your own pace with our high-quality bike rentals.",
      es: "Explora la región a tu propio ritmo con nuestro arriendo de bicicletas de alta calidad.",
      de: "Erkunden Sie die Region in Ihrem eigenen Tempo mit unseren hochwertigen Mietfahrrädern.",
      fr: "Explorez la région à votre rythme avec nos vélos de location de haute qualité."
    },
    path: "arriendo-de-bicicletas",
    gallery: [
      {
        src: "/images/services/xs/bicycles_001.webp",
        alt: {
          en: "Mountain bikes ready for an adventure.",
          es: "Bicicletas de montaña listas para la aventura.",
          de: "Mountainbikes bereit für ein Abenteuer.",
          fr: "Vélos de montagne prêts pour l'aventure."
        }
      },
      {
        src: "/images/services/xs/bicycles_002.webp",
        alt: {
          en: "Cycling through scenic landscapes.",
          es: "Pedaleando por paisajes escénicos.",
          de: "Radfahren durch malerische Landschaften.",
          fr: "Faire du vélo à travers des paysages pittoresques."
        }
      }
    ],
    enabled: true,
  }
];
