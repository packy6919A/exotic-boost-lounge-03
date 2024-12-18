import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    images: { src: string; alt: string; }[];
    description: string;
  };
}

const ServiceDetailsDialog: React.FC<ServiceDetailsProps> = ({
  isOpen,
  onClose,
  service
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {service.images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4">{service.description}</p>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsDialog;