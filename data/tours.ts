import { Tour } from "@/interfaces";

export const tours: Tour[] = [
    {
        id: '1',
        title: 'Watch Wales and Dolphins',
        description: 'Join us to the thrilling experience of whale-watching. Perfect for nature lovers.',
        long_description: [
            "Embark on an unforgettable journey to Chañaral de Aceituno, a picturesque coastal village nestled along Chile’s Humboldt Current. This nutrient-rich stream of cold water flows northward from Antarctica, creating an ideal habitat for an incredible array of marine life, including the majestic whales.",
            "Your adventure begins with a two-hour boat ride into the pristine waters of the Pacific Ocean. Guided by experienced boat operators, you’ll navigate these vibrant seas in search of some of the most awe-inspiring creatures on Earth. Whale sightings vary with their natural patterns, and while there’s a small chance they may elude us, their presence is a frequent and mesmerizing highlight.",
            "Our tours adhere to strict guidelines to ensure the whales are observed responsibly. These gentle giants are given ample distance to move freely in their natural environment, allowing you to witness their grandeur without causing any disturbance."],
        price: 100,
        seats: 9,
        image: 'whales_005.webp',
        image_caption: 'Whale fluke or tail with the whale about to do an inmersion.',
        gallery: [
            { src: 'whales_001.webp', alt: 'Dorsal Fin' },
            { src: 'whales_002.webp', alt: 'Blowhole with water drops' },
            { src: 'whales_003.webp', alt: 'Blowhole taking in air' },
            { src: 'whales_004.webp', alt: 'Blowhole about to close' },
            { src: 'whales_005.webp', alt: 'Whale fluke or tail with the whale about to do an inmersion.' },
            { src: 'whales_006.webp', alt: 'View of bay of Chañaral de Aceituno' },
            { src: 'whales_007.webp', alt: 'View towards the see.' },
        ],
        enabled: true
    },
    {
        id: '2',
        title: 'Night Sky',
        description: 'Discover the beauty of the best night sky in the world.',
        long_description: [
            "Embark on an unforgettable journey beneath the world’s most pristine night skies. The Collowara Observatory, nestled in the heart of northern Chile, provides the perfect location to immerse yourself in the celestial wonders that have captivated humanity for centuries. Under the guidance of specialized astronomy experts, you will explore a variety of breathtaking celestial objects, including stars, planets, nebulae, and distant galaxies. What you see will depend on the season and the phase of the Moon, offering a unique experience every time you visit. During moonless nights, the Milky Way reveals its stunning details, while a full moon allows for intricate views of lunar craters and formations.",
            "This carefully curated tour ensures that even the rare chance of cloudy skies won’t overshadow the magic of the night. Our knowledgeable guides will enhance your understanding of the universe through engaging stories, history, and science, making this experience as educational as it is awe-inspiring.",
            "Discover why the skies above Collowara are celebrated as some of the clearest on Earth and create memories that will last a lifetime."],
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
        long_description: ['Insert long description here...'],
        price: 100,
        seats: 9,
        image: 'observatories_001.webp',
        image_caption: 'Cerro Tololo Observatory is one of the most impactful observatories.',
        gallery: [
            { src: 'observatories_001.webp', alt: 'Cerro Tololo Observatory is one of the most impactful observatories.' },
            { src: 'nightsky_001.webp', alt: 'The south celestial pole photographed over three hours.' },
        ],
        enabled: false
    },
    {
        id: '4',
        title: 'Birdwatching',
        description: 'Do you like birdwatching? We have several wetlands with permanent and migrant species.',
        long_description: ['Insert long description here...'],
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
        enabled: false
    },
    {
        id: '5',
        title: 'Visit the Elqui Valley',
        description: 'The Elqui Valley is a magical place, with its beautiful landscapes, great food, wine and pisco.',
        long_description: ['Insert long description here...'],
        price: 100,
        seats: 9,
        image: 'elqui_valley_001.webp',
        image_caption: 'Montegrande is where Gabriela Mistral (Nobel Prize Winner) lived and worked.',
        gallery: [
            { src: 'elqui_valley_001.webp', alt: 'Montegrande is where Gabriela Mistral (Nobel Prize Winner) lived and worked.' },
            { src: 'elqui_valley_002.webp', alt: 'Beautiful street of Montegrande.' },
        ],
        enabled: false
    },
    {
        id: '6',
        title: 'Climb the Andes',
        description: 'If having the best sky in the world was not enough, did you know that we have many mountains?',
        long_description: ['Insert long description here...'],
        price: 100,
        seats: 9,
        image: 'climb_the_andes_001.webp',
        image_caption: 'The sun rises over the mountains near Combarbalá.',
        gallery: [
            { src: 'climb_the_andes_001.webp', alt: 'The sun rises over the mountains near Combarbalá.' },
            { src: 'climb_the_andes_002.webp', alt: 'Pabellón Peak is over 4000 msnm.' },
        ],
        enabled: false
    },
    {
        id: '7',
        title: 'Something else entirely?',
        description: 'Are you one of those "special interests" kind of tourist? We got you covered!.',
        long_description: ["Are you a traveler with unique interests looking for something truly special? We can tailor your experience to match your passions and curiosities. Whether it’s exploring the art of fishing, marveling at the diversity of bird species in their natural habitats, or visiting the world’s largest astronomical observatories, the options are as varied as they are fascinating.",
            "From the tranquil beauty of the Elqui Valley, known for its vineyards and pisco production, to the challenge of high-altitude adventures reaching peaks above 6,000 meters, there’s something here for everyone. For those drawn to arid landscapes, our proximity to the desert offers opportunities for exploration and discovery in one of the driest regions on Earth.",
            "Let us help you create a tour that matches your specific interests and unveils the extraordinary experiences waiting in this region. Whatever your passion, we’ll help you find the perfect adventure."],
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