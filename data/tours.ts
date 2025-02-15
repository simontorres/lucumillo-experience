import { Tour } from "@/interfaces";

export const tours: Tour[] = [
    {
        id: 'avistamiento-de-ballenas-y-delfines',
        title: {
            es: 'Avistamiento de ballenas y delfines',
            en: 'Whale and Dolphin Watching',
            de: 'Wal- und Delfinbeobachtung',
            fr: 'Observation de baleines et de dauphins'
        },
        description: {
            es: 'Únete a nosotros para la emocionante experiencia de avistamiento de ballenas. Perfecto para los amantes de la naturaleza.',
            en: 'Join us for an exciting whale-watching experience. Perfect for nature lovers.',
            de: 'Begleiten Sie uns zu einem aufregenden Walbeobachtungserlebnis. Perfekt für Naturliebhaber.',
            fr: 'Rejoignez-nous pour une expérience passionnante d’observation des baleines. Parfait pour les amoureux de la nature.'
        },
        long_description: {
            es: [
                "Embárcate en un viaje inolvidable a Chañaral de Aceituno, un pintoresco pueblo costero ubicado junto a la Corriente de Humboldt en Chile. Esta corriente fría y rica en nutrientes fluye hacia el norte desde la Antártida, creando un hábitat ideal para una increíble variedad de vida marina, incluyendo las majestuosas ballenas.",
                "Tu aventura comienza con un paseo en bote de dos horas hacia las prístinas aguas del Océano Pacífico. Guiado por operadores de botes experimentados, navegarás por estos mares llenos de vida en busca de algunas de las criaturas más impresionantes del planeta. Los avistamientos de ballenas varían según sus patrones naturales, y aunque existe una pequeña posibilidad de que no las encontremos, su presencia es un espectáculo frecuente y fascinante.",
                "Nuestros tours siguen estrictas pautas para garantizar que las ballenas sean observadas de manera responsable. A estos gentiles gigantes se les mantiene a una distancia adecuada para que se muevan libremente en su entorno natural, permitiéndote apreciar su grandeza sin causarles ninguna molestia."
            ],
            en: [
                "Embark on an unforgettable journey to Chañaral de Aceituno, a picturesque coastal town located along the Humboldt Current in Chile. This cold, nutrient-rich current flows north from Antarctica, creating an ideal habitat for an incredible variety of marine life, including majestic whales.",
                "Your adventure begins with a two-hour boat ride into the pristine waters of the Pacific Ocean. Guided by experienced boat operators, you will sail through these life-filled seas in search of some of the most impressive creatures on the planet. Whale sightings vary according to their natural patterns, and while there is a small chance we may not find them, their presence is a frequent and fascinating spectacle.",
                "Our tours follow strict guidelines to ensure that whales are observed responsibly. These gentle giants are kept at a safe distance, allowing them to move freely in their natural environment while giving you the opportunity to appreciate their grandeur without causing them any disturbance."
            ],
            de: [
                "Begib dich auf eine unvergessliche Reise nach Chañaral de Aceituno, einem malerischen Küstenort entlang des Humboldtstroms in Chile. Diese kalte, nährstoffreiche Meeresströmung fließt von der Antarktis nach Norden und schafft einen idealen Lebensraum für eine erstaunliche Vielfalt an Meereslebewesen, darunter majestätische Wale.",
                "Dein Abenteuer beginnt mit einer zweistündigen Bootsfahrt in die unberührten Gewässer des Pazifischen Ozeans. Unter der Leitung erfahrener Bootsführer fährst du durch diese lebensreichen Meere auf der Suche nach einigen der beeindruckendsten Kreaturen des Planeten. Walsichtungen variieren je nach natürlichen Mustern, und obwohl es eine kleine Möglichkeit gibt, keine Wale zu sehen, ist ihre Präsenz ein häufiges und faszinierendes Schauspiel.",
                "Unsere Touren folgen strengen Richtlinien, um sicherzustellen, dass die Wale verantwortungsbewusst beobachtet werden. Diese sanften Riesen werden aus einer sicheren Entfernung betrachtet, sodass sie sich frei in ihrer natürlichen Umgebung bewegen können und du ihre beeindruckende Größe in voller Pracht erleben kannst, ohne sie zu stören."
            ],
            fr: [
                "Partez pour un voyage inoubliable à Chañaral de Aceituno, un charmant village côtier situé le long du courant de Humboldt au Chili. Ce courant marin froid et riche en nutriments s'écoule vers le nord depuis l'Antarctique, créant un habitat idéal pour une incroyable diversité de vie marine, y compris les majestueuses baleines.",
                "Votre aventure commence par une excursion en bateau de deux heures dans les eaux immaculées de l'océan Pacifique. Guidé par des opérateurs de bateaux expérimentés, vous naviguerez dans ces mers riches en vie à la recherche de quelques-unes des créatures les plus impressionnantes de la planète. Les observations de baleines varient en fonction de leurs comportements naturels, et bien qu'il existe une faible possibilité de ne pas en apercevoir, leur présence est un spectacle fréquent et fascinant.",
                "Nos excursions suivent des règles strictes pour garantir une observation responsable des baleines. Ces géants paisibles sont observés à une distance sécurisée, leur permettant d'évoluer librement dans leur environnement naturel et vous offrant la possibilité d'admirer leur splendeur sans les perturber."
            ]
        },
        includes: {
            es: 'Viaje de ida y vuelta, entrada para el avistamiento de cetáceos y almuerzo.',
            en: 'Round-trip travel, whale-watching tour entry, and lunch.',
            de: 'Hin- und Rückfahrt, Eintritt zur Walbeobachtung und Mittagessen.',
            fr: 'Transport aller-retour, entrée pour l’observation des baleines et déjeuner.'
        },        
        price: 0,
        seats: 9,
        image: 'whales_005.webp',
        image_caption: {
            es: 'Aleta o cola de ballena, justo antes de sumergirse.',
            en: 'Whale fluke or tail, just before diving.',
            de: 'Walflosse oder Schwanz, kurz vor dem Abtauchen.',
            fr: 'Queue de baleine, juste avant la plongée.'
        },        
        gallery: [
            {
                src: 'whales_001.webp',
                alt: {
                    es: 'Aleta dorsal',
                    en: 'Dorsal fin',
                    de: 'Rückenflosse',
                    fr: 'Nageoire dorsale'
                }
            },
            {
                src: 'whales_002.webp',
                alt: {
                    es: 'Espiráculo con gotas de agua',
                    en: 'Blowhole with water droplets',
                    de: 'Blasloch mit Wassertropfen',
                    fr: 'Évent avec gouttelettes d’eau'
                }
            },
            {
                src: 'whales_003.webp',
                alt: {
                    es: 'Espiráculo tomando aire',
                    en: 'Blowhole taking in air',
                    de: 'Blasloch nimmt Luft auf',
                    fr: 'Évent aspirant de l’air'
                }
            },
            {
                src: 'whales_004.webp',
                alt: {
                    es: 'Espiráculo a punto de cerrarse',
                    en: 'Blowhole about to close',
                    de: 'Blasloch kurz vor dem Schließen',
                    fr: 'Évent sur le point de se fermer'
                }
            },
            {
                src: 'whales_005.webp',
                alt: {
                    es: 'Aleta o cola de ballena, justo antes de sumergirse.',
                    en: 'Whale fluke or tail, just before diving.',
                    de: 'Walflosse oder Schwanz, kurz vor dem Abtauchen.',
                    fr: 'Queue de baleine, juste avant la plongée.'
                }
            },
            {
                src: 'whales_006.webp',
                alt: {
                    es: 'Vista de la bahía de Chañaral de Aceituno',
                    en: 'View of Chañaral de Aceituno Bay',
                    de: 'Blick auf die Bucht von Chañaral de Aceituno',
                    fr: 'Vue sur la baie de Chañaral de Aceituno'
                }
            },
            {
                src: 'whales_007.webp',
                alt: {
                    es: 'Vista hacia el mar.',
                    en: 'View towards the ocean.',
                    de: 'Blick auf das Meer.',
                    fr: 'Vue vers l’océan.'
                }
            }
        ],
        departing_place: 'Hostal Luna Del Mar, Isabel Riquelme 840, La Serena',
        departing_time: '07:00 AM',
        enabled: true
    },
    {
        id: 'tour-astronomico-collowara-andacollo',
        title: {
            es: 'Tour Astronómico',
            en: 'Astronomical Tour',
            de: 'Astronomische Tour',
            fr: 'Tour Astronomique'
        },
        description: {
            es: 'Descubre la belleza del mejor cielo nocturno del mundo.',
            en: 'Discover the beauty of the world’s best night sky.',
            de: 'Entdecken Sie die Schönheit des besten Nachthimmels der Welt.',
            fr: 'Découvrez la beauté du meilleur ciel nocturne au monde.'
        },
        long_description: {
            es: [
                "Embárcate en un viaje inolvidable bajo los cielos nocturnos más prístinos del mundo. El Observatorio Collowara, ubicado en el corazón del norte de Chile, ofrece el lugar perfecto para sumergirte en las maravillas celestes que han cautivado a la humanidad durante siglos. Bajo la guía de expertos en astronomía, explorarás una variedad de impresionantes objetos celestes, incluyendo estrellas, planetas, nebulosas y galaxias distantes. Lo que verás dependerá de la estación y la fase de la Luna, ofreciendo una experiencia única en cada visita. Durante las noches sin luna, la Vía Láctea revela sus asombrosos detalles, mientras que una luna llena permite observar con detalle los cráteres y formaciones lunares.",
                "Este tour cuidadosamente diseñado garantiza que incluso la rara posibilidad de cielos nublados no opacará la magia de la noche. Nuestros guías expertos enriquecerán tu comprensión del universo a través de historias fascinantes, datos históricos y científicos, haciendo que esta experiencia sea tan educativa como inspiradora.",
                "Descubre por qué los cielos de Collowara son reconocidos como unos de los más claros del planeta y crea recuerdos que durarán toda la vida."
            ],
            en: [
                "Embark on an unforgettable journey under some of the world's clearest night skies. The Collowara Observatory, located in the heart of northern Chile, offers the perfect place to immerse yourself in the celestial wonders that have fascinated humanity for centuries. Guided by astronomy experts, you will explore a variety of breathtaking celestial objects, including stars, planets, nebulae, and distant galaxies. What you see will depend on the season and the Moon's phase, making each visit unique. On moonless nights, the Milky Way reveals its astonishing details, while a full moon allows for a detailed view of craters and lunar formations.",
                "This carefully designed tour ensures that even the rare chance of cloudy skies will not dim the magic of the night. Our expert guides will enrich your understanding of the universe through fascinating stories, historical facts, and scientific insights, making this experience as educational as it is inspiring.",
                "Discover why Collowara’s skies are recognized as some of the clearest on the planet and create memories that will last a lifetime."
            ],
            de: [
                "Begib dich auf eine unvergessliche Reise unter den klarsten Nachthimmeln der Welt. Das Observatorium Collowara, das im Herzen Nordchiles liegt, bietet den perfekten Ort, um in die Wunder des Universums einzutauchen, die die Menschheit seit Jahrhunderten faszinieren. Unter der Anleitung von Astronomie-Experten erkundest du eine Vielzahl beeindruckender Himmelsobjekte, darunter Sterne, Planeten, Nebel und ferne Galaxien. Was du sehen wirst, hängt von der Jahreszeit und der Mondphase ab, was jede Tour einzigartig macht. In mondlosen Nächten offenbart sich die Milchstraße in ihrer ganzen Pracht, während bei Vollmond die Krater und Formationen der Mondoberfläche deutlich erkennbar sind.",
                "Diese Tour ist so konzipiert, dass selbst die seltene Möglichkeit bewölkter Nächte die Magie des Erlebnisses nicht trüben kann. Unsere erfahrenen Guides bereichern dein Verständnis des Universums mit faszinierenden Geschichten, historischen Fakten und wissenschaftlichen Erklärungen und machen diese Erfahrung sowohl lehrreich als auch inspirierend.",
                "Entdecke, warum die Himmel von Collowara als einige der klarsten auf dem Planeten gelten, und schaffe Erinnerungen, die ein Leben lang bleiben."
            ],
            fr: [
                "Partez pour un voyage inoubliable sous les cieux nocturnes les plus clairs du monde. L'observatoire de Collowara, situé au cœur du nord du Chili, offre l'endroit parfait pour vous immerger dans les merveilles célestes qui fascinent l'humanité depuis des siècles. Sous la conduite d'experts en astronomie, vous découvrirez une variété d'objets célestes impressionnants, tels que des étoiles, des planètes, des nébuleuses et des galaxies lointaines. Ce que vous verrez dépendra de la saison et de la phase de la Lune, rendant chaque visite unique. Lors des nuits sans lune, la Voie lactée révèle ses incroyables détails, tandis qu'une pleine lune permet d'observer de près les cratères et les formations lunaires.",
                "Cette excursion est conçue de manière à ce que même la rare possibilité d'un ciel nuageux ne puisse pas diminuer la magie de l'expérience. Nos guides expérimentés enrichiront votre compréhension de l'univers grâce à des histoires fascinantes, des faits historiques et des explications scientifiques, rendant cette expérience à la fois éducative et inspirante.",
                "Découvrez pourquoi les cieux de Collowara sont reconnus comme étant parmi les plus clairs de la planète et créez des souvenirs qui dureront toute une vie."
            ]
        },
        includes: {
            es: 'Viaje de ida y vuelta, entrada para el tour.',
            en: 'Round-trip travel and tour entry.',
            de: 'Hin- und Rückfahrt und Eintritt zur Tour.',
            fr: 'Transport aller-retour et entrée à la visite.'
        },        
        price: 38000,
        seats: 9,
        image: 'nightsky_004.webp',
        image_caption: {
            es: 'Nebulosa de Orión fotografiada en Andacollo.',
            en: 'Orion Nebula photographed in Andacollo.',
            de: 'Orionnebel in Andacollo fotografiert.',
            fr: 'Nébuleuse d’Orion photographiée à Andacollo.'
        },        
        gallery: [
            {
                src: 'nightsky_001.webp',
                alt: {
                    es: 'El polo sur celeste fotografiado durante tres horas.',
                    en: 'The south celestial pole photographed for three hours.',
                    de: 'Der südliche Himmelspol, drei Stunden lang fotografiert.',
                    fr: 'Le pôle céleste sud photographié pendant trois heures.'
                }
            },
            {
                src: 'nightsky_002.webp',
                alt: {
                    es: 'Observatorio Collowara con una parte de la Vía Láctea visible.',
                    en: 'Collowara Observatory with part of the Milky Way visible.',
                    de: 'Collowara-Observatorium mit einem Teil der Milchstraße sichtbar.',
                    fr: 'Observatoire de Collowara avec une partie de la Voie lactée visible.'
                }
            },
            {
                src: 'nightsky_003_2.webp',
                alt: {
                    es: 'Entrada del Observatorio Collowara con la galaxia sobre él.',
                    en: 'Entrance to Collowara Observatory with the galaxy above it.',
                    de: 'Eingang des Collowara-Observatoriums mit der Galaxie darüber.',
                    fr: 'Entrée de l’Observatoire de Collowara avec la galaxie au-dessus.'
                }
            },
            {
                src: 'nightsky_004.webp',
                alt: {
                    es: 'Nebulosa de Orión fotografiada en Andacollo.',
                    en: 'Orion Nebula photographed in Andacollo.',
                    de: 'Orionnebel, aufgenommen in Andacollo.',
                    fr: 'Nébuleuse d’Orion photographiée à Andacollo.'
                }
            },
            {
                src: 'nightsky_005.webp',
                alt: {
                    es: 'Cometa Leonard C/2021 A1',
                    en: 'Comet Leonard C/2021 A1',
                    de: 'Komet Leonard C/2021 A1',
                    fr: 'Comète Leonard C/2021 A1'
                }
            }
        ],        
        departing_place: 'Hostal Luna Del Mar, Isabel Riquelme 840, La Serena',
        departing_time: '19:30',
        enabled: true
    },
    {
        id: 'professional-observatories',
        title: {
            es: 'Observatorios Profesionales',
            en: 'Professional Observatories'
        },
        description: {
            es: '¿Alguna vez has querido visitar un observatorio profesional? En nuestra región tenemos algunos de los más grandes del mundo.',
            en: 'Have you ever wanted to visit a professional observatory? In our region, we have some of the largest in the world!'
        },
        long_description: {
            es: [
                "Descubre los impresionantes observatorios astronómicos de la región de Coquimbo, hogar de algunos de los telescopios más avanzados del mundo. Enclavados en la cumbre de montañas a más de 2.000 metros de altura, estos centros científicos ofrecen una ventana al universo como ninguna otra.",
                "Podrás conocer observatorios icónicos como Cerro Tololo, La Silla y Gemini Sur, donde astrónomos de todo el mundo estudian los secretos del cosmos. Durante la visita, aprenderás sobre la tecnología de los telescopios, las investigaciones en curso y la importancia de esta región para la astronomía.",
                "Si eres un apasionado del espacio y la exploración, este tour te brindará una experiencia inolvidable, permitiéndote acercarte a la ciencia que desvela los misterios del universo."
            ],
            en: [
                "Discover the impressive astronomical observatories of the Coquimbo region, home to some of the world's most advanced telescopes. Located atop mountains over 2,000 meters high, these scientific centers offer a unique window into the universe.",
                "You will visit iconic observatories such as Cerro Tololo, La Silla, and Gemini South, where astronomers from around the world study the secrets of the cosmos. During the tour, you’ll learn about telescope technology, ongoing research, and the significance of this region for astronomy.",
                "If you are passionate about space and exploration, this tour will provide you with an unforgettable experience, bringing you closer to the science that unveils the mysteries of the universe."
            ],
            de: [
                "Entdecke die beeindruckenden astronomischen Observatorien der Region Coquimbo, die Heimat einiger der fortschrittlichsten Teleskope der Welt. Diese wissenschaftlichen Einrichtungen, die sich auf Berggipfeln in über 2.000 Metern Höhe befinden, bieten ein einzigartiges Fenster zum Universum.",
                "Du wirst ikonische Observatorien wie Cerro Tololo, La Silla und Gemini Süd besuchen, wo Astronomen aus aller Welt die Geheimnisse des Kosmos erforschen. Während der Führung erfährst du mehr über die Technologie der Teleskope, aktuelle Forschungsprojekte und die Bedeutung dieser Region für die Astronomie.",
                "Wenn du dich für den Weltraum und seine Erkundung begeisterst, wird dir diese Tour ein unvergessliches Erlebnis bieten und dir die faszinierende Wissenschaft näherbringen, die die Geheimnisse des Universums entschlüsselt."
            ],
            fr: [
                "Découvrez les impressionnants observatoires astronomiques de la région de Coquimbo, qui abrite certains des télescopes les plus avancés au monde. Ces centres scientifiques, perchés sur des sommets à plus de 2 000 mètres d'altitude, offrent une fenêtre unique sur l'univers.",
                "Vous visiterez des observatoires emblématiques tels que Cerro Tololo, La Silla et Gemini Sud, où des astronomes du monde entier étudient les secrets du cosmos. Lors de la visite, vous en apprendrez davantage sur la technologie des télescopes, les recherches en cours et l'importance de cette région pour l'astronomie.",
                "Si vous êtes passionné par l'espace et l'exploration, cette excursion vous offrira une expérience inoubliable, vous permettant de découvrir la science fascinante qui dévoile les mystères de l'univers."
            ]
        },
        includes: {
            es: '',
            en: ''
        },
        price: 0,
        seats: 9,
        image: 'observatories_001.webp',
        image_caption: {
            es: 'El Observatorio Cerro Tololo es uno de los más impactantes.',
            en: 'Cerro Tololo Observatory is one of the most impactful observatories.'
        },
        gallery: [
            {
                src: 'observatories_001.webp',
                alt: {
                    es: 'El Observatorio Cerro Tololo es uno de los más impactantes.',
                    en: 'Cerro Tololo Observatory is one of the most impactful observatories.'
                }
            },
            {
                src: 'nightsky_001.webp',
                alt: {
                    es: 'El polo sur celeste fotografiado durante tres horas.',
                    en: 'The south celestial pole photographed over three hours.'
                }
            },
        ],
        departing_place: 'Hostal Luna Del Mar, Isabel Riquelme 840, La Serena',
        departing_time: '',
        enabled: false
    },
    {
        id: 'birdwatching',
        title: {
            es: 'Avistamiento de Aves',
            en: 'Birdwatching'
        },
        description: {
            es: '¿Te gusta el avistamiento de aves? Contamos con varios humedales con especies residentes y migratorias.',
            en: 'Do you like birdwatching? We have several wetlands with permanent and migrant species.'
        },
        long_description: {
            es: [
                "Explora la increíble diversidad de aves que habitan la región de Coquimbo. Nuestros humedales, valles y zonas costeras albergan una gran variedad de especies, desde residentes permanentes hasta visitantes migratorios que llegan en distintas estaciones del año.",
                "Podrás observar majestuosas garzas en busca de alimento, pequeños y enérgicos atrapamoscas, y aves emblemáticas como el Diucon de ojos rojos o el Fio Fio, que viaja miles de kilómetros desde el Amazonas hasta Chile cada año.",
                "Ya seas un experto en ornitología o un entusiasta de la naturaleza, este tour te ofrece la oportunidad de sumergirte en el fascinante mundo de las aves y disfrutar de la tranquilidad de sus hábitats naturales."
            ],
            en: [
                "Explore the incredible bird diversity of the Coquimbo region. Our wetlands, valleys, and coastal areas are home to a wide variety of species, from permanent residents to migratory visitors that arrive in different seasons of the year.",
                "You will observe majestic herons hunting for food, energetic flycatchers darting through the air, and iconic birds like the Fire-eyed Diucon or the Fio Fio, which migrates thousands of kilometers from the Amazon to Chile every year.",
                "Whether you're a seasoned birder or just a nature enthusiast, this tour offers you the chance to immerse yourself in the fascinating world of birds and enjoy the serenity of their natural habitats."
            ],
            de: [
                "Erkunde die erstaunliche Vielfalt an Vögeln, die in der Region Coquimbo beheimatet sind. Unsere Feuchtgebiete, Täler und Küstengebiete bieten einer großen Vielzahl von Arten ein Zuhause – von dauerhaft ansässigen bis hin zu Zugvögeln, die zu verschiedenen Jahreszeiten ankommen.",
                "Du kannst majestätische Reiher auf Nahrungssuche beobachten, kleine und energiegeladene Tyrannenfliegenschnäpper und ikonische Vögel wie den rotäugigen Diucón oder den Fio Fio, der jedes Jahr Tausende von Kilometern vom Amazonas nach Chile reist.",
                "Egal, ob du ein erfahrener Ornithologe oder ein begeisterter Naturliebhaber bist, diese Tour bietet dir die Möglichkeit, in die faszinierende Welt der Vögel einzutauchen und die Ruhe ihrer natürlichen Lebensräume zu genießen."
            ],
            fr: [
                "Explorez la diversité incroyable des oiseaux qui habitent la région de Coquimbo. Nos zones humides, vallées et littoraux abritent une grande variété d'espèces, allant des résidents permanents aux visiteurs migrateurs qui arrivent à différentes saisons de l'année.",
                "Vous pourrez observer des hérons majestueux en quête de nourriture, de petits et énergiques tyranneaux et des oiseaux emblématiques comme le Diucón aux yeux rouges ou le Fio Fio, qui migre chaque année sur des milliers de kilomètres depuis l'Amazonie jusqu'au Chili.",
                "Que vous soyez un ornithologue expérimenté ou simplement un passionné de nature, cette excursion vous offre l'opportunité de plonger dans le monde fascinant des oiseaux et de profiter de la tranquillité de leurs habitats naturels."
            ]
        },
        includes: {
            es: '',
            en: ''
        },
        price: 0,
        seats: 9,
        image: 'birdwatching_004.webp',
        image_caption: {
            es: 'El Fio Fio es un ave migratoria, aquí posado en una rama de Espino.',
            en: 'Fio Fio is a migrant bird, here it is perching on an Espino branch.'
        },
        gallery: [
            {
                src: "birdwatching_001.webp",
                alt: {
                    es: 'Garza grande buscando alimento en el río Elqui.',
                    en: 'Great Egret looking for food in the Elqui River.'
                }
            },
            {
                src: "birdwatching_002.webp",
                alt: {
                    es: 'Zorzal austral cazando lombrices.',
                    en: 'Austral Thrush hunting for worms.'
                }
            },
            {
                src: "birdwatching_003.webp",
                alt: {
                    es: 'Cachudito posado en una rama seca.',
                    en: 'Tufted Tit-Tyrant perching on an old branch.'
                }
            },
            {
                src: "birdwatching_004.webp",
                alt: {
                    es: 'El Fio Fio es un ave migratoria, aquí posado en una rama de Espino.',
                    en: 'Fio Fio is a migrant bird, here it is perching on an Espino branch.'
                }
            },
            {
                src: "birdwatching_005.webp",
                alt: {
                    es: 'Diucón de ojos rojos con su presa, una avispa desafortunada.',
                    en: 'Fire-eyed Diucon with its prey, an unlucky wasp.'
                }
            },
        ],
        departing_place: 'Hostal Luna Del Mar, Isabel Riquelme 840, La Serena',
        departing_time: '',
        enabled: false
    },
    {
        id: 'visit-elqui-valley',
        title: {
            es: 'Visita al Valle de Elqui',
            en: 'Visit the Elqui Valley'
        },
        description: {
            es: 'El Valle de Elqui es un lugar mágico, con hermosos paisajes, excelente gastronomía, vinos y pisco.',
            en: 'The Elqui Valley is a magical place, with its beautiful landscapes, great food, wine, and pisco.'
        },
        long_description: {
            es: [
                "Descubre el encanto del Valle de Elqui, una región llena de paisajes impresionantes, cielos despejados y una cultura vibrante. Este valle es famoso por su producción de pisco, viñedos y una atmósfera única que ha inspirado a artistas y viajeros durante generaciones.",
                "Recorreremos pueblos emblemáticos como Vicuña, cuna de la poeta Gabriela Mistral, y Montegrande, donde vivió y trabajó la Premio Nobel de Literatura. Aprenderás sobre la historia y tradiciones locales, explorando mercados artesanales y degustando productos típicos de la zona.",
                "Además, el valle es reconocido por su energía mística, con diversos centros de meditación y observación astronómica. Ya sea que busques una experiencia cultural, gastronómica o simplemente un escape a la naturaleza, el Valle de Elqui tiene algo para ti."
            ],
            en: [
                "Discover the charm of the Elqui Valley, a region filled with breathtaking landscapes, clear skies, and a vibrant culture. This valley is famous for its pisco production, vineyards, and a unique atmosphere that has inspired artists and travelers for generations.",
                "We will visit iconic towns like Vicuña, birthplace of poet Gabriela Mistral, and Montegrande, where the Nobel Prize winner lived and worked. You’ll learn about local history and traditions while exploring artisan markets and tasting regional specialties.",
                "The valley is also known for its mystical energy, with meditation centers and opportunities for astronomical observation. Whether you're looking for a cultural, gastronomic, or nature-focused experience, the Elqui Valley has something for you."
            ],
            de: [
                "Entdecke den Charme des Elqui-Tals, einer Region voller atemberaubender Landschaften, klarer Himmel und lebendiger Kultur. Dieses Tal ist berühmt für seine Pisco-Produktion, Weinberge und eine einzigartige Atmosphäre, die Künstler und Reisende seit Generationen inspiriert hat.",
                "Wir werden durch charakteristische Dörfer wie Vicuña, die Geburtsstadt der Dichterin Gabriela Mistral, und Montegrande, wo die Nobelpreisträgerin lebte und arbeitete, spazieren. Du wirst mehr über die Geschichte und die lokalen Traditionen erfahren, Kunsthandwerksmärkte erkunden und typische regionale Produkte verkosten.",
                "Darüber hinaus ist das Tal für seine mystische Energie bekannt, mit zahlreichen Meditationszentren und astronomischen Beobachtungsstationen. Egal, ob du eine kulturelle, gastronomische oder einfach nur eine Naturerfahrung suchst – das Elqui-Tal hat für jeden etwas zu bieten."
            ],
            fr: [
                "Découvrez le charme de la vallée de l'Elqui, une région pleine de paysages époustouflants, de ciels dégagés et d'une culture vibrante. Cette vallée est célèbre pour sa production de pisco, ses vignobles et son atmosphère unique qui inspire artistes et voyageurs depuis des générations.",
                "Nous visiterons des villages emblématiques comme Vicuña, ville natale de la poétesse Gabriela Mistral, et Montegrande, où la lauréate du prix Nobel de littérature a vécu et travaillé. Vous en apprendrez davantage sur l'histoire et les traditions locales, en explorant les marchés d'artisanat et en dégustant des produits typiques de la région.",
                "De plus, la vallée est connue pour son énergie mystique, avec divers centres de méditation et d'observation astronomique. Que vous recherchiez une expérience culturelle, gastronomique ou simplement un moment de détente au cœur de la nature, la vallée de l'Elqui saura vous séduire."
            ]
        },
        includes: {
            es: '',
            en: ''
        },
        price: 0,
        seats: 9,
        image: 'elqui_valley_001.webp',
        image_caption: {
            es: 'Montegrande, donde vivió y trabajó Gabriela Mistral (Premio Nobel de Literatura).',
            en: 'Montegrande is where Gabriela Mistral (Nobel Prize Winner) lived and worked.'
        },
        gallery: [
            { src: 'elqui_valley_001.webp', alt: { es: 'Montegrande, donde vivió y trabajó Gabriela Mistral (Premio Nobel de Literatura).', en: 'Montegrande is where Gabriela Mistral (Nobel Prize Winner) lived and worked.' } },
            { src: 'elqui_valley_002.webp', alt: { es: 'Hermosa calle de Montegrande.', en: 'Beautiful street of Montegrande.' } },
        ],
        departing_place: 'Hostal Luna Del Mar, Isabel Riquelme 840, La Serena',
        departing_time: '',
        enabled: false
    },
    {
        id: 'climb-the-andes',
        title: {
            es: 'Ascenso a los Andes',
            en: 'Climb the Andes'
        },
        description: {
            es: 'Si tener el mejor cielo del mundo no fuera suficiente, ¿sabías que también tenemos muchas montañas?',
            en: 'If having the best sky in the world was not enough, did you know that we have many mountains?'
        },
        long_description: {
            es: [
                "Embárcate en una aventura inolvidable en los Andes chilenos, hogar de majestuosas cumbres y paisajes sobrecogedores. Desde montañas accesibles para principiantes hasta desafiantes ascensos por sobre los 4.000 metros de altitud, ofrecemos experiencias para todos los niveles.",
                "Descubre la belleza de la Cordillera de los Andes mientras te adentras en rutas que han sido transitadas por generaciones de exploradores y montañistas. Nuestros guías te acompañarán en cada paso del camino, asegurando una experiencia segura y enriquecedora.",
                "Ya sea que busques una caminata de un día con vistas panorámicas o una expedición de alta montaña, te ayudamos a encontrar la aventura perfecta para ti."
            ],
            en: [
                "Embark on an unforgettable adventure in the Chilean Andes, home to majestic peaks and breathtaking landscapes. From beginner-friendly hikes to challenging climbs above 4,000 meters, we offer experiences for all skill levels.",
                "Discover the beauty of the Andes as you explore trails that have been traversed by generations of adventurers and mountaineers. Our expert guides will accompany you every step of the way, ensuring a safe and enriching experience.",
                "Whether you seek a one-day trek with panoramic views or a high-altitude expedition, we help you find the perfect adventure for you."
            ],
            de: [
                "Begib dich auf ein unvergessliches Abenteuer in den chilenischen Anden, der Heimat majestätischer Gipfel und atemberaubender Landschaften. Von leicht zugänglichen Bergen für Anfänger bis hin zu anspruchsvollen Aufstiegen über 4.000 Meter bieten wir Erlebnisse für jedes Niveau.",
                "Entdecke die Schönheit der Andenkordillere, während du dich auf Pfaden bewegst, die seit Generationen von Entdeckern und Bergsteigern begangen wurden. Unsere erfahrenen Guides begleiten dich auf jedem Schritt des Weges und sorgen für ein sicheres und bereicherndes Erlebnis.",
                "Egal, ob du eine Tageswanderung mit Panoramablick oder eine anspruchsvolle Hochgebirgsexpedition suchst – wir helfen dir, das perfekte Abenteuer zu finden."
            ],
            fr: [
                "Partez pour une aventure inoubliable dans les Andes chiliennes, où des sommets majestueux et des paysages à couper le souffle vous attendent. Des montagnes accessibles aux débutants aux ascensions exigeantes dépassant les 4 000 mètres, nous proposons des expériences adaptées à tous les niveaux.",
                "Découvrez la beauté de la cordillère des Andes en empruntant des sentiers parcourus par des générations d'explorateurs et d'alpinistes. Nos guides expérimentés vous accompagneront à chaque étape, garantissant une expérience sûre et enrichissante.",
                "Que vous cherchiez une randonnée d'une journée avec des vues panoramiques ou une expédition en haute montagne, nous vous aiderons à trouver l'aventure idéale."
            ]
        },
        includes: {
            es: '',
            en: ''
        },
        price: 0,
        seats: 9,
        image: 'climb_the_andes_001.webp',
        image_caption: {
            es: 'El sol nace sobre las montañas cerca de Combarbalá.',
            en: 'The sun rises over the mountains near Combarbalá.'
        },
        gallery: [
            {
                src: 'climb_the_andes_001.webp',
                alt: {
                    es: 'El sol nace sobre las montañas cerca de Combarbalá.',
                    en: 'The sun rises over the mountains near Combarbalá.'
                }
            },
            {
                src: 'climb_the_andes_002.webp',
                alt: {
                    es: 'El Cerro Pabellón supera los 4000 msnm.',
                    en: 'Pabellón Peak is over 4000 meters above sea level.'
                }
            },
        ],
        departing_place: 'Hostal Luna Del Mar, Isabel Riquelme 840, La Serena',
        departing_time: '',
        enabled: false
    },
    {
        id: 'tour-de-intereses-especiales',
        title: {
            es: '¿Algo completamente diferente?',
            en: 'Something Completely Different?',
            de: 'Etwas völlig Anderes?',
            fr: 'Quelque chose de complètement différent?'
        },
        description: {
            es: '¿Eres de las personas que no les gustan los tours regulares? Escríbenos y hagamos un plan!',
            en: 'Don’t like regular tours? Write to us, and let’s make a plan!',
            de: 'Mögen Sie keine gewöhnlichen Touren? Schreiben Sie uns, und wir erstellen gemeinsam einen Plan!',
            fr: 'Vous n’aimez pas les circuits classiques ? Écrivez-nous et élaborons un plan !'
        },
        long_description: {
            es: [
                "¿Eres un viajero con intereses únicos en busca de algo realmente especial? Podemos personalizar tu experiencia para que coincida con tus pasiones y curiosidades. Ya sea explorar el arte de la pesca, maravillarte con la diversidad de especies de aves en sus hábitats naturales o visitar los observatorios astronómicos más grandes del mundo, las opciones son tan variadas como fascinantes.",
                "Desde la tranquila belleza del Valle de Elqui, conocido por sus viñedos y producción de pisco, hasta el desafío de aventuras en alturas que superan los 6.000 metros, hay algo aquí para todos. Para aquellos atraídos por los paisajes áridos, nuestra cercanía al desierto ofrece oportunidades de exploración y descubrimiento en una de las regiones más secas del planeta.",
                "Permítenos ayudarte a crear un tour que se ajuste a tus intereses específicos y que te permita descubrir las experiencias extraordinarias que esperan en esta región. Sea cual sea tu pasión, te ayudaremos a encontrar la aventura perfecta."
            ],
            en: [
                "Are you a traveler with unique interests looking for something truly special? We can customize your experience to match your passions and curiosities. Whether it’s exploring the art of fishing, marveling at the diversity of bird species in their natural habitats, or visiting the world's largest astronomical observatories, the options are as varied as they are fascinating.",
                "From the serene beauty of the Elqui Valley, known for its vineyards and pisco production, to the challenge of high-altitude adventures exceeding 6,000 meters, there is something here for everyone. For those drawn to arid landscapes, our proximity to the desert offers opportunities for exploration and discovery in one of the driest regions on the planet.",
                "Let us help you create a tour tailored to your specific interests so you can experience the extraordinary adventures waiting for you in this region. Whatever your passion, we’ll help you find the perfect journey."
            ],
            de: [
                "Bist du ein Reisender mit einzigartigen Interessen, der nach etwas wirklich Besonderem sucht? Wir können dein Erlebnis ganz nach deinen Leidenschaften und Vorlieben gestalten. Ob es darum geht, die Kunst des Angelns zu entdecken, die Vielfalt der Vogelwelt in ihrem natürlichen Lebensraum zu bestaunen oder die größten astronomischen Observatorien der Welt zu besuchen – die Möglichkeiten sind ebenso vielfältig wie faszinierend.",
                "Von der ruhigen Schönheit des Elqui-Tals, das für seine Weinberge und die Pisco-Produktion bekannt ist, bis hin zu abenteuerlichen Erkundungen in Höhen von über 6.000 Metern gibt es hier für jeden etwas. Für diejenigen, die von trockenen Landschaften fasziniert sind, bietet unsere Nähe zur Wüste Gelegenheiten, eine der trockensten Regionen der Welt zu erkunden.",
                "Lass uns dir helfen, eine Tour zusammenzustellen, die genau auf deine Interessen zugeschnitten ist, damit du die außergewöhnlichen Erlebnisse entdecken kannst, die in dieser Region auf dich warten. Was auch immer deine Leidenschaft ist – wir helfen dir, das perfekte Abenteuer zu finden."
            ],
            fr: [
                "Vous êtes un voyageur avec des intérêts uniques à la recherche de quelque chose de vraiment spécial ? Nous pouvons personnaliser votre expérience en fonction de vos passions et de vos curiosités. Que ce soit pour découvrir l'art de la pêche, admirer la diversité des espèces d'oiseaux dans leur habitat naturel ou visiter les plus grands observatoires astronomiques du monde, les options sont aussi nombreuses que fascinantes.",
                "De la beauté paisible de la vallée de l'Elqui, réputée pour ses vignobles et sa production de pisco, aux aventures palpitantes à plus de 6 000 mètres d'altitude, il y a ici de quoi satisfaire tout le monde. Pour ceux attirés par les paysages arides, notre proximité avec le désert offre des opportunités d'exploration dans l'une des régions les plus sèches de la planète.",
                "Laissez-nous vous aider à créer un circuit adapté à vos intérêts afin que vous puissiez découvrir les expériences extraordinaires qui vous attendent dans cette région. Quelle que soit votre passion, nous vous aiderons à trouver l'aventure parfaite."
            ]
        },
        includes: {
            es: '',
            en: '',
            de: '',
            fr: ''
        }
        ,
        price: 0,
        seats: 9,
        image: 'something_else_002.webp',
        image_caption: {
            es: 'Hermoso atardecer desde La Serena con Coquimbo al fondo.',
            en: 'Beautiful sunset from La Serena with Coquimbo in the background.',
            de: 'Wunderschöner Sonnenuntergang von La Serena mit Coquimbo im Hintergrund.',
            fr: 'Magnifique coucher de soleil depuis La Serena avec Coquimbo en arrière-plan.'
        },
        gallery: [
            {
                src: 'something_else_001.webp',
                alt: {
                    es: 'Andacollo en la noche, hacia la derecha se ve el resplandor de La Serena.',
                    en: 'Andacollo at night, with the glow of La Serena visible to the right.',
                    de: 'Andacollo bei Nacht, mit dem Leuchten von La Serena rechts sichtbar.',
                    fr: 'Andacollo la nuit, avec la lueur de La Serena visible à droite.'
                }
            },
            {
                src: 'something_else_002.webp',
                alt: {
                    es: 'Hermoso atardecer desde La Serena con Coquimbo al fondo.',
                    en: 'Beautiful sunset from La Serena with Coquimbo in the background.',
                    de: 'Wunderschöner Sonnenuntergang von La Serena mit Coquimbo im Hintergrund.',
                    fr: 'Magnifique coucher de soleil depuis La Serena avec Coquimbo en arrière-plan.'
                }
            },
            {
                src: 'something_else_003.webp',
                alt: {
                    es: 'Hermosas nubes en el atardecer, cerca de Combarbalá.',
                    en: 'Beautiful clouds at sunset, near Combarbalá.',
                    de: 'Wunderschöne Wolken bei Sonnenuntergang in der Nähe von Combarbalá.',
                    fr: 'De magnifiques nuages au coucher du soleil, près de Combarbalá.'
                }
            }
        ],
        departing_place: 'Hostal Luna Del Mar, Isabel Riquelme 840, La Serena',
        departing_time: '',
        enabled: true
    },
    {
        id: 'tour-de-astrofografia',
        title: {
            es: 'Astrofotografía',
            en: 'Astrophotography',
            de: 'Astrofotografie',
            fr: 'Astrophotographie'
        },
        description: {
            es: 'Para quienes tengan su equipo y necesitan un lugar seguro, con energía y además seguro.',
            en: 'For those with their own equipment who need a secure location with power.',
            de: 'Für diejenigen, die ihre eigene Ausrüstung haben und einen sicheren Ort mit Strom benötigen.',
            fr: 'Pour ceux qui disposent de leur propre équipement et ont besoin d’un endroit sécurisé avec alimentation électrique.'
        },
        long_description: {
            es: [
                "Si eres un apasionado de la astrofotografía y buscas un lugar ideal para capturar el cielo nocturno, este servicio es para ti. Te ofrecemos un sitio seguro, lejos de la contaminación lumínica, con acceso a energía eléctrica para tus equipos.",
                "Nuestra ubicación privilegiada en el norte de Chile, bajo uno de los cielos más despejados del mundo, te permitirá registrar la Vía Láctea, nebulosas, cúmulos estelares y galaxias con una claridad impresionante.",
                "Este servicio está pensado para astrofotógrafos independientes que deseen un espacio adecuado para largas sesiones de captura sin interrupciones. Contáctanos para más detalles y disponibilidad."
            ],
            en: [
                "If you're passionate about astrophotography and looking for the perfect location to capture the night sky, this service is for you. We offer a secure site, far from light pollution, with access to electrical power for your equipment.",
                "Our privileged location in northern Chile, under one of the world's clearest skies, allows you to photograph the Milky Way, nebulae, star clusters, and galaxies with impressive clarity.",
                "This service is designed for independent astrophotographers who need a dedicated space for long capturing sessions without interruptions. Contact us for more details and availability."
            ],
            de: [
                "Wenn du ein begeisterter Astrofotograf bist und nach dem idealen Ort suchst, um den Nachthimmel einzufangen, ist dieser Service genau das Richtige für dich. Wir bieten dir einen sicheren Standort, fernab von Lichtverschmutzung, mit Zugang zu Strom für deine Ausrüstung.",
                "Unsere privilegierte Lage im Norden Chiles, unter einem der klarsten Himmel der Welt, ermöglicht es dir, die Milchstraße, Nebel, Sternhaufen und Galaxien mit beeindruckender Klarheit festzuhalten.",
                "Dieser Service richtet sich an unabhängige Astrofotografen, die einen geeigneten Ort für lange Aufnahmesitzungen ohne Unterbrechungen benötigen. Kontaktiere uns für weitere Informationen und Verfügbarkeit."
            ],
            fr: [
                "Si vous êtes passionné d'astrophotographie et que vous recherchez un endroit idéal pour capturer le ciel nocturne, ce service est fait pour vous. Nous vous proposons un site sécurisé, à l'écart de toute pollution lumineuse, avec un accès à l'électricité pour votre équipement.",
                "Notre emplacement privilégié dans le nord du Chili, sous l'un des ciels les plus clairs du monde, vous permettra de photographier la Voie lactée, des nébuleuses, des amas d'étoiles et des galaxies avec une clarté impressionnante.",
                "Ce service est destiné aux astrophotographes indépendants qui recherchent un endroit adapté pour de longues séances de capture sans interruptions. Contactez-nous pour plus d'informations et connaître les disponibilités."
            ]
        },
        includes: {
            es: '',
            en: '',
            de: '',
            fr: ''
        },
        price: 0,
        seats: 9,
        image: 'something_else_002.webp',
        image_caption: {
            es: 'Hermoso atardecer desde La Serena con Coquimbo al fondo.',
            en: 'Beautiful sunset from La Serena with Coquimbo in the background.',
            de: 'Wunderschöner Sonnenuntergang von La Serena mit Coquimbo im Hintergrund.',
            fr: 'Magnifique coucher de soleil depuis La Serena avec Coquimbo en arrière-plan.'
        },
        gallery: [
            {
                src: 'something_else_001.webp',
                alt: {
                    es: 'Andacollo en la noche, hacia la derecha se ve el resplandor de La Serena.',
                    en: 'Andacollo at night, with the glow of La Serena visible to the right.',
                    de: 'Andacollo bei Nacht, mit dem Leuchten von La Serena rechts sichtbar.',
                    fr: 'Andacollo la nuit, avec la lueur de La Serena visible à droite.'
                }
            },
            {
                src: 'something_else_002.webp',
                alt: {
                    es: 'Hermoso atardecer desde La Serena con Coquimbo al fondo.',
                    en: 'Beautiful sunset from La Serena with Coquimbo in the background.',
                    de: 'Wunderschöner Sonnenuntergang von La Serena mit Coquimbo im Hintergrund.',
                    fr: 'Magnifique coucher de soleil depuis La Serena avec Coquimbo en arrière-plan.'
                }
            },
            {
                src: 'something_else_003.webp',
                alt: {
                    es: 'Hermosas nubes en el atardecer, cerca de Combarbalá.',
                    en: 'Beautiful clouds at sunset, near Combarbalá.',
                    de: 'Wunderschöne Wolken bei Sonnenuntergang in der Nähe von Combarbalá.',
                    fr: 'De magnifiques nuages au coucher du soleil, près de Combarbalá.'
                }
            }
        ],
        departing_place: 'Hostal Luna Del Mar, Isabel Riquelme 840, La Serena',
        departing_time: '',
        enabled: false
    },
];