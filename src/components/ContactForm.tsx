import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone" />
            <Textarea placeholder="Tell us about your project" />
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;