import React from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, className }) => (
  <div className={`relative group overflow-hidden rounded-lg ${className || ''}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <span className="text-white text-lg font-semibold">{alt}</span>
    </div>
  </div>
);

const Gallery: React.FC = () => {
  const images: GalleryImageProps[] = [
    { src: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80", alt: "Custom Lamborghini", className: "col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "Ferrari Bodywork" },
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "Porsche Upgrade" },
    { src: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80", alt: "McLaren Aerodynamics" },
    { src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "Aston Martin Detail" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Masterpieces</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;