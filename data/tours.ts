interface Tour {
    id: number
    title: string
    description: string
    image: string
}

export const tours: Tour[] = [
    {
      id: 1,
      title: 'Watch Wales and Dolphins',
      description: 'Join us for a thrilling adventure in the mountains. Perfect for nature lovers.',
      image: '/images/whales.webp',
    },
    {
      id: 2,
      title: 'Night Sky',
      description: 'Discover the beauty of the city at night. A perfect blend of culture and nightlife.',
      image: '/images/nightsky.webp',
    },
    {
      id: 3,
      title: 'Professional Observatories',
      description: 'Relax on the pristine beaches and enjoy the tropical paradise.',
      image: '/images/tololo.webp',
    },
  ];