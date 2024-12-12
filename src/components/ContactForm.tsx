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
        <div className="max-w-md mx-auto">
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
    </section>
  );
};

export default ContactForm;