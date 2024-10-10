import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-current" size={20} />
      ))}
    </div>
    <p className="text-gray-700 mb-4">{quote}</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ExoticSpeed transformed my Lamborghini into a true work of art. Their attention to detail is unmatched.",
      author: "Alex Rodriguez",
      role: "Supercar Enthusiast"
    },
    {
      quote: "The performance upgrades they installed on my Ferrari have completely changed the driving experience. It's like a new car!",
      author: "Sarah Chen",
      role: "Professional Race Driver"
    },
    {
      quote: "Their custom body kit for my McLaren turns heads everywhere I go. ExoticSpeed is the best in the business.",
      author: "Michael Thompson",
      role: "Luxury Car Collector"
    }
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;