import React, { useState } from 'react';
import ServiceDetailsDialog from './ServiceDetailsDialog';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface CarDetails {
  title: string;
  images: { src: string; alt: string; }[];
  description: string;
}

const GalleryImage: React.FC<GalleryImageProps & { onClick: () => void }> = ({ src, alt, className, onClick }) => (
  <div 
    className={`relative group overflow-hidden rounded-lg cursor-pointer ${className || ''}`}
    onClick={onClick}
  >
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
      }}
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <span className="text-white text-lg font-semibold">{alt}</span>
    </div>
  </div>
);

const Gallery: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<CarDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const carDetails: Record<string, CarDetails> = {
    "BMW": {
      title: "BMW Collection",
      images: [
        {
          src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "BMW Front View"
        },
        {
          src: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "BMW Interior"
        }
      ],
      description: "Experience the ultimate driving machine with our BMW collection. Each vehicle represents the perfect blend of luxury, performance, and innovation. Our BMWs feature state-of-the-art technology, premium materials, and the distinctive styling that has made BMW a legend in automotive excellence."
    },
    "Lamborghini": {
      title: "Lamborghini Collection",
      images: [
        {
          src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Lamborghini Exterior"
        },
        {
          src: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Lamborghini Interior"
        }
      ],
      description: "Discover the extraordinary with our Lamborghini collection. These masterpieces of Italian engineering combine breathtaking design with unmatched performance. Each Lamborghini delivers an unforgettable driving experience with its powerful engines, advanced aerodynamics, and luxurious interiors."
    },
    "Porsche": {
      title: "Porsche Collection",
      images: [
        {
          src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Porsche Front View"
        },
        {
          src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Porsche Interior"
        }
      ],
      description: "Enter the world of precision engineering with our Porsche collection. Known for their perfect balance of performance and luxury, our Porsche vehicles offer an unmatched driving experience. From the iconic 911 to the versatile Cayenne, each model embodies the spirit of automotive excellence."
    },
    "McLaren": {
      title: "McLaren Collection",
      images: [
        {
          src: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "McLaren Exterior"
        },
        {
          src: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "McLaren Interior"
        }
      ],
      description: "Experience Formula 1 technology on the road with our McLaren collection. These vehicles represent the pinnacle of automotive engineering, combining lightweight construction with aerodynamic excellence. Each McLaren delivers breathtaking performance and exclusive luxury."
    },
    "Mercedes": {
      title: "Mercedes Collection",
      images: [
        {
          src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Mercedes Front View"
        },
        {
          src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Mercedes Interior"
        }
      ],
      description: "Discover luxury redefined with our Mercedes-Benz collection. Each vehicle exemplifies the perfect combination of sophistication, comfort, and performance. From advanced safety features to premium interior appointments, our Mercedes-Benz vehicles deliver an unparalleled driving experience."
    }
  };

  const [images] = useState<GalleryImageProps[]>([
    {
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "BMW",
      className: "col-span-2 row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Lamborghini"
    },
    {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Porsche"
    },
    {
      src: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "McLaren"
    },
    {
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mercedes"
    },
  ]);

  const handleImageClick = (alt: string) => {
    const carDetail = carDetails[alt];
    if (carDetail) {
      setSelectedCar(carDetail);
      setIsDialogOpen(true);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold text-white">Our Masterpieces</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <GalleryImage 
              key={index} 
              {...image} 
              onClick={() => handleImageClick(image.alt)}
            />
          ))}
        </div>
      </div>
      {selectedCar && (
        <ServiceDetailsDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          service={selectedCar}
        />
      )}
    </section>
  );
};

export default Gallery;