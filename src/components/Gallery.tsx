import React from 'react';

const GalleryImage = ({ src, alt }) => (
  <div className="relative group overflow-hidden rounded-lg">
    <img src={src} alt={alt} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <span className="text-white text-lg font-semibold">{alt}</span>
    </div>
  </div>
);

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "Custom Lamborghini" },
    { src: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "Ferrari Bodywork" },
    { src: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "Porsche Upgrade" },
    { src: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "McLaren Aerodynamics" },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;