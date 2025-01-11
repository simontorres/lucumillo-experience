export interface GalleryImage {
    src: string
    alt: string
}

export interface Tour {
    id: string
    title: string
    description: string
    long_description: string
    price: number,
    seats: number,
    image: string
    image_caption: string
    gallery: GalleryImage[],
    enabled: boolean
}