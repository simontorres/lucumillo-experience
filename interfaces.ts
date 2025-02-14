export interface GalleryImage {
    src: string
    alt: string
}
export interface LocalizedText {
    en: string
    es: string
}
export interface Tour {
    id: string
    title: string
    description: string
    long_description: string[]
    includes: string
    price: number
    seats: number
    image: string
    image_caption: string
    gallery: GalleryImage[]
    departing_place: string
    departing_time: string
    enabled: boolean
}

export interface BicycleRental {
    includes: string
    price: number
    gallery: GalleryImage[]
    retrieving_place: string
    enabled: boolean
}

export interface Service {
    id: string
    title: LocalizedText
    description: LocalizedText
    path: string
    gallery: GalleryImage[]
    enabled: boolean
}

export interface Social {
    name: string
    value: string
    full_url: string
    enabled: boolean
}