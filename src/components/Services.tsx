import React from 'react';
import { Car, PaintBucket, Wrench, Gauge } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-red-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
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
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;