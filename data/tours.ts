import { Tour } from "@/interfaces";

export const tours: Tour[] = [
    {
        id: '1',
        title: 'Watch Wales and Dolphins',
        description: 'Join us to the thrilling experience of whale-watching. Perfect for nature lovers.',
        long_description: 'Insert long description here...',
        price: 100,
        seats: 9,
        image: 'IMG_6666_1.webp',
        image_caption: 'Just two hours north from La Serena',
        gallery: [
            { src: 'IMG_6666_1.webp', alt: 'Just two hours north from La Serena' },
        ],
        enabled: true
    },
    {
        id: '2',
        title: 'Night Sky',
        description: 'Discover the beauty of the best night sky in the world.',
        long_description: 'Insert long description here...',
        price: 100,
        seats: 9,
        image: 'nightsky_004.webp',
        image_caption: 'Orion Nebula photographed in Andacollo.',
        gallery: [
            { src: 'nightsky_001.webp', alt: 'The south celestial pole photographed over three hours.' },
            { src: 'nightsky_002.webp', alt: 'Collowara Observatory with part of the Milky Way visible.' },
            { src: 'nightsky_003.webp', alt: 'Collowara Observatory entrance with the galaxy on top of it.' },
            { src: 'nightsky_004.webp', alt: 'Orion Nebula photographed in Andacollo.' },
            { src: 'nightsky_005.webp', alt: 'Comet Leonard C/2021 A1' },
        ],
        enabled: true
    },
    {
        id: '3',
        title: 'Professional Observatories',
        description: 'Have you ever wanted to visit a professional observatory? In our region we have some of the largest in the world!.',
        long_description: 'Insert long description here...',
        price: 100,
        seats: 9,
        image: 'nightsky_001.webp',
        image_caption: 'The south celestial pole photographed over three hours.',
        gallery: [
            { src: 'nightsky_001.webp', alt: 'The south celestial pole photographed over three hours.' },
        ],
        enabled: true
    },
    {
        id: '4',
        title: 'Birdwatching',
        description: 'Do you like birdwatching? We have several wetlands with permanent and migrant species.',
        long_description: 'Insert long description here...',
        price: 100,
        seats: 9,
        image: 'birdwatching_004.webp',
        image_caption: 'Fio Fio is a migrant bird, here it is perching on an Espino branch.',
        gallery: [
            { src: "birdwatching_001.webp", alt: 'Great Egret looking for food in the Elqui River.' },
            { src: "birdwatching_002.webp", alt: 'Austral Thrush hunting for worms.' },
            { src: "birdwatching_003.webp", alt: 'Tufted Tit-Tyrant perching on and old branch.' },
            { src: "birdwatching_004.webp", alt: 'Fio Fio is a migrant bird, here it is perching on an Espino branch.' },
            { src: "birdwatching_005.webp", alt: 'Fire-eyed Diucon with its prey, an unlucky wasp.' },
        ],
        enabled: true
    },
    {
        id: '5',
        title: 'Visit the Elqui Valley',
        description: 'The Elqui Valley is a magical place, with its beautiful landscapes, great food, wine and pisco.',
        long_description: 'Insert long description here...',
        price: 100,
        seats: 9,
        image: 'elqui_valley_001.webp',
        image_caption: 'Montegrande is where Gabriela Mistral (Nobel Prize Winner) lived and worked.',
        gallery: [
            { src: 'elqui_valley_001.webp', alt: 'Montegrande is where Gabriela Mistral (Nobel Prize Winner) lived and worked.' },
            { src: 'elqui_valley_002.webp', alt: 'Beautiful street of Montegrande.' },
        ],
        enabled: true
    },
    {
        id: '6',
        title: 'Climb the Andes',
        description: 'If having the best sky in the world was not enough, did you know that we have many mountains?',
        long_description: 'Insert long description here...',
        price: 100,
        seats: 9,
        image: 'climb_the_andes_001.webp',
        image_caption: 'The sun rises over the mountains near Combarbalá.',
        gallery: [
            { src: 'climb_the_andes_001.webp', alt: 'The sun rises over the mountains near Combarbalá.' },
            { src: 'climb_the_andes_002.webp', alt: 'Pabellón Peak is over 4000 msnm.' },
        ],
        enabled: true
    },
    {
        id: '7',
        title: 'Something else entirely?',
        description: 'Are you one of those "special interests" kind of tourist? We got you covered!.',
        long_description: 'Insert long description here...',
        price: 100,
        seats: 9,
        image: 'something_else_002.webp',
        image_caption: 'Beautiful sunset from La Serena with Coquimbo in the Background.',
        gallery: [
            { src: 'something_else_001.webp', alt: 'Andacollo in the night, to the middle-right you see the shining from La Serena.' },
            { src: 'something_else_002.webp', alt: 'Beautiful sunset from La Serena with Coquimbo in the Background.' },
            { src: 'something_else_003.webp', alt: 'Beautiful clouds in the Sunset near Combarbalá.' },
        ],
        enabled: true
    },
];