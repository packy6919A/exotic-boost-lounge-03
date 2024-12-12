import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create mailto URL
      const mailtoUrl = `mailto:info@gtp-na.com?subject=New Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
      
      // Open default email client
      window.location.href = mailtoUrl;
      
      // Show success message
      toast.success("A Representative of GT Performance & Design will contact you shortly. Thanks");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map and Directions */}
          <div className="space-y-4">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.4751234567891!2d-80.12345678901234!3d26.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d7f7a9b9a9a9%3A0x1234567890abcdef!2sGT%20Performance%20%26%20Design!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Our Location</h3>
              <p className="text-gray-600">GT Performance & Design</p>
              <p className="text-gray-600">2660 NW Boca Raton Blvd</p>
              <p className="text-gray-600">Boca Raton, FL 33431</p>
              <a 
                href="https://www.google.com/maps/dir//GT+Performance+%26+Design+2660+NW+Boca+Raton+Blvd+33431+Boca+Raton+FL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-red-600 hover:text-red-700"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                type="text" 
                placeholder="Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input 
                type="email" 
                placeholder="Email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input 
                type="tel" 
                placeholder="Phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Textarea 
                placeholder="Tell us about your project" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;