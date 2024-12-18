import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Edit2, Trash2, LogOut, ChevronRight } from "lucide-react";

interface Car {
  id: string;
  src: string;
  alt: string;
  className?: string;
}

const CarAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState<string | null>(null);
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

  const handleLogin = () => {
    if (username === 'pippopelo' && password === '#Piccirillo0902#') {
      setIsAuthenticated(true);
      toast.success('Successfully logged in!');
    } else {
      toast.error('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setIsEditing(null);
    toast.success('Logged out successfully');
  };

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

  const handleEditCar = (id: string) => {
    const carToEdit = cars.find(car => car.id === id);
    if (carToEdit) {
      setIsEditing(id);
      setNewCar({
        src: carToEdit.src,
        alt: carToEdit.alt
      });
    }
  };

  const handleUpdateCar = () => {
    if (!isEditing) return;
    
    setCars(cars.map(car => {
      if (car.id === isEditing) {
        return {
          ...car,
          src: newCar.src,
          alt: newCar.alt
        };
      }
      return car;
    }));

    setIsEditing(null);
    setNewCar({ src: '', alt: '' });
    toast.success("Car updated successfully!");
  };

  const handleDeleteCar = (id: string) => {
    setCars(cars.filter(car => car.id !== id));
    toast.success("Car removed successfully!");
  };

  return (
    <div className="p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
            Manage Cars
            <ChevronRight className="ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader className="flex flex-row justify-between items-center">
            <DialogTitle>Manage Car Gallery</DialogTitle>
            {isAuthenticated && (
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            )}
          </DialogHeader>
          
          {!isAuthenticated ? (
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </div>
          ) : (
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
                <Button onClick={isEditing ? handleUpdateCar : handleAddCar}>
                  {isEditing ? 'Update Car' : 'Add New Car'}
                </Button>
              </div>

              <div className="grid gap-4">
                {cars.map((car) => (
                  <div key={car.id} className="flex items-center gap-4 p-2 border rounded">
                    <img src={car.src} alt={car.alt} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{car.alt}</h3>
                      <p className="text-sm text-gray-500 truncate">{car.src}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEditCar(car.id)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDeleteCar(car.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CarAdmin;