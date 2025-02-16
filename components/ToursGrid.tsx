import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/interfaces";

interface ToursGridProps {
  tours: Tour[];
  locale: string
}

const ToursGrid: React.FC<ToursGridProps> = ({ tours, locale }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tours
        .filter((tour) => tour.enabled)
        .map((tour) => (
          <Link key={tour.id} href={`/tours/${tour.id}`} className="h-full">
            <div className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <Image
                src={`/images/tours/xs/${tour.image}`}
                alt={tour.title[locale]}
                width={480}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{tour.title[locale]}</h2>
                <p className="dark:text-gray-300 flex-grow">{tour.description[locale]}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ToursGrid;
