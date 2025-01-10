interface Tour {
    id: string
    title: string
    description: string
    long_description: string
    image: string
    image_caption: string
    enabled: boolean
}

export const tours: Tour[] = [
    {
        id: '1',
        title: 'Watch Wales and Dolphins',
        description: 'Join us to the thrilling experience of whale-watching. Perfect for nature lovers.',
        long_description: '',
        image: 'IMG_6666_1.webp',
        image_caption: 'Just two hours north from La Serena ',
        enabled: true
    },
    {
        id: '2',
        title: 'Night Sky',
        description: 'Discover the beauty of the best night sky in the world.',
        long_description: '',
        image: 'nightsky_004.webp',
        image_caption: 'Orion Nebula photographed in Andacollo.',
        enabled: true
    },
    {
        id: '3',
        title: 'Professional Observatories',
        description: 'Have you ever wanted to visit a professional observatory? In our region we have some of the largest in the world!.',
        long_description: '',
        image: 'nightsky_001.webp',
        image_caption: 'The south celestial pole photographed over three hours.',
        enabled: true
    },
    {
        id: '4',
        title: 'Birdwatching',
        description: 'Do you like birdwatching? We have several wetlands with permanent and migrant species.',
        long_description: '',
        image: 'birdwatching_004.webp',
        image_caption: 'Fio Fio is a migrant bird, here is perching on an Espino branch.',
        enabled: true
    },
    {
        id: '5',
        title: 'Visit the Elqui Valley',
        description: 'The Elqui Valley is a magical place, with its beautiful landscapes, great food, wine and pisco.',
        long_description: '',
        image: 'elqui_valley_001.webp',
        image_caption: 'Montegrande is where Gabriela Mistral (Nobel Prize Winner) lived and worked.',
        enabled: true
    },
    {
        id: '6',
        title: 'Climb the Andes',
        description: 'If having the best sky in the world was not enough, did you know that we have many mountains?',
        long_description: '',
        image: 'climb_the_andes_001.webp',
        image_caption: 'The sun rises over the mountains near Combarbalá.',
        enabled: true
    },
    {
        id: '7',
        title: 'Something else entirely?',
        description: 'Are you one of those "special interests" kind of tourist? We got you covered!.',
        long_description: '',
        image: 'something_else_002.webp',
        image_caption: 'Beautiful sunset from La Serena with Coquimbo in the Background.',
        enabled: true
    },
];