
export interface LocalizedText {
    [key: string]: string
    en: string
    es: string
}
export interface LocalizedLongDescripion {
    [key: string]: string[]
    en: string[]
    es: string[]
}
export interface GalleryImage {
    src: string
    alt: LocalizedText
}
export interface Tour {
    id: string
    title: LocalizedText
    description: LocalizedText
    long_description: LocalizedLongDescripion
    includes: LocalizedText
    price: number
    seats: number
    image: string
    image_caption: LocalizedText
    gallery: GalleryImage[]
    departing_place: string
    departing_time: string
    enabled: boolean
}

export interface BicycleRental {
    includes: LocalizedText
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