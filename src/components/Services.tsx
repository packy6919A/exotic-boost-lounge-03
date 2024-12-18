import React, { useState } from 'react';
import { Car, PaintBucket, Wrench, Gauge } from 'lucide-react';
import ServiceDetailsDialog from './ServiceDetailsDialog';

const ServiceCard = ({ icon, title, description, onClick }) => (
  <div 
    className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
    onClick={onClick}
  >
    <div className="text-red-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const serviceDetails = {
    "Custom Body Kits": {
      title: "Custom Body Kits",
      images: [
        {
          src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Custom Body Kit 1"
        },
        {
          src: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Custom Body Kit 2"
        },
        {
          src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Custom Body Kit 3"
        },
        {
          src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Custom Body Kit 4"
        }
      ],
      description: "Transform your vehicle with our premium custom body kits. Each kit is carefully designed and fitted to enhance your car's aesthetics while maintaining aerodynamic efficiency."
    },
    "Premium Paint Jobs": {
      title: "Premium Paint Jobs",
      images: [
        {
          src: "https://images.unsplash.com/photo-1612825173281-9a193378527e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Premium Paint 1"
        },
        {
          src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Premium Paint 2"
        },
        {
          src: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Premium Paint 3"
        },
        {
          src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Premium Paint 4"
        }
      ],
      description: "Our premium paint services use the highest quality materials and techniques to give your vehicle a stunning, long-lasting finish that turns heads."
    },
    "Performance Upgrades": {
      title: "Performance Upgrades",
      images: [
        {
          src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Performance Upgrade 1"
        },
        {
          src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Performance Upgrade 2"
        },
        {
          src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Performance Upgrade 3"
        },
        {
          src: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Performance Upgrade 4"
        }
      ],
      description: "Enhance your vehicle's performance with our cutting-edge upgrades. From engine tuning to suspension improvements, we'll help you achieve peak performance."
    },
    "Aerodynamics Optimization": {
      title: "Aerodynamics Optimization",
      images: [
        {
          src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Aerodynamics 1"
        },
        {
          src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Aerodynamics 2"
        },
        {
          src: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Aerodynamics 3"
        },
        {
          src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Aerodynamics 4"
        }
      ],
      description: "Optimize your vehicle's aerodynamics with our advanced packages. We use wind tunnel testing and computational fluid dynamics to perfect your car's airflow."
    }
  };

  const services = [
    {
      icon: <Car size={48} />,
      title: "Custom Body Kits",
      description: "Transform your car's appearance with our bespoke body kits designed for exotic and sports cars."
    },
    {
      icon: <PaintBucket size={48} />,
      title: "Premium Paint Jobs",
      description: "Our expert painters use top-quality materials to give your car a stunning, long-lasting finish."
    },
    {
      icon: <Wrench size={48} />,
      title: "Performance Upgrades",
      description: "Boost your car's performance with our cutting-edge upgrades and tuning services."
    },
    {
      icon: <Gauge size={48} />,
      title: "Aerodynamics Optimization",
      description: "Improve your car's handling and efficiency with our advanced aerodynamics packages."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              onClick={() => setSelectedService(service.title)}
            />
          ))}
        </div>
      </div>
      {selectedService && (
        <ServiceDetailsDialog
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={serviceDetails[selectedService]}
        />
      )}
    </section>
  );
};

export default Services;