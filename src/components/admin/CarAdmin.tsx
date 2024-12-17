import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Car {
  id: string;
  src: string;
  alt: string;
  className?: string;
}

const CarAdmin = () => {
  const [cars, setCars] = useState<Car[]>([
    {
      id: '1',
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ferrari",
      className: "col-span-2 row-span-2"
    },
    {
      id: '2',
      src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Nissan"
    },
    {
      id: '3',
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Porsche Upgrade"
    },
    {
      id: '4',
      src: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chevrolet"
    },
    {
      id: '5',
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mercedes"
    },
  ]);

  const [newCar, setNewCar] = useState({
    src: '',
    alt: ''
  });

  const handleAddCar = () => {
    if (!newCar.src || !newCar.alt) {
      toast.error("Please fill in all fields");
      return;
    }

    const car: Car = {
      id: Date.now().toString(),
      src: newCar.src,
      alt: newCar.alt
    };

    setCars([...cars, car]);
    setNewCar({ src: '', alt: '' });
    toast.success("Car added successfully!");
  };

  const handleDeleteCar = (id: string) => {
    setCars(cars.filter(car => car.id !== id));
    toast.success("Car removed successfully!");
  };

  return (
    <div className="p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Manage Cars</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Manage Car Gallery</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="grid gap-4">
              <Input
                placeholder="Image URL"
                value={newCar.src}
                onChange={(e) => setNewCar({ ...newCar, src: e.target.value })}
              />
              <Input
                placeholder="Car Name"
                value={newCar.alt}
                onChange={(e) => setNewCar({ ...newCar, alt: e.target.value })}
              />
              <Button onClick={handleAddCar}>Add New Car</Button>
            </div>

            <div className="grid gap-4">
              {cars.map((car) => (
                <div key={car.id} className="flex items-center gap-4 p-2 border rounded">
                  <img src={car.src} alt={car.alt} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{car.alt}</h3>
                    <p className="text-sm text-gray-500 truncate">{car.src}</p>
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteCar(car.id)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CarAdmin;