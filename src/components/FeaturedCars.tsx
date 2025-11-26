import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Users, Fuel } from "lucide-react";
import { Link } from "react-router-dom";
import carSUV from "@/assets/car-suv.jpg";
import carSports from "@/assets/car-sports.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carElectric from "@/assets/car-electric.jpg";

const cars = [
  {
    id: 1,
    name: "Mercedes-Benz GLE",
    price: "KES 12,500,000",
    image: carSUV,
    specs: { speed: "210 km/h", seats: "7 Seats", fuel: "Diesel" },
  },
  {
    id: 2,
    name: "BMW M4 Competition",
    price: "KES 14,200,000",
    image: carSports,
    specs: { speed: "290 km/h", seats: "4 Seats", fuel: "Petrol" },
  },
  {
    id: 3,
    name: "Audi Q7 Premium",
    price: "KES 11,000,000",
    image: carSedan,
    specs: { speed: "240 km/h", seats: "7 Seats", fuel: "Hybrid" },
  },
  {
    id: 4,
    name: "Tesla Model S",
    price: "KES 13,000,000",
    image: carElectric,
    specs: { speed: "250 km/h", seats: "5 Seats", fuel: "Electric" },
  },
];

const FeaturedCars = () => {
  return (
    <section id="cars" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Vehicles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked collection of premium vehicles, each offering 
            unmatched quality and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <Card 
              key={car.id} 
              className="group overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="grid grid-cols-3 gap-2 w-full text-white text-xs">
                    <div className="flex flex-col items-center">
                      <Gauge className="h-4 w-4 mb-1" />
                      <span>{car.specs.speed}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Users className="h-4 w-4 mb-1" />
                      <span>{car.specs.seats}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Fuel className="h-4 w-4 mb-1" />
                      <span>{car.specs.fuel}</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {car.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-accent">{car.price}</span>
                </div>
                <Link to={`/car/${car.id}`} className="w-full">
                  <Button 
                    className="w-full bg-primary hover:bg-accent hover:text-accent-foreground"
                  >
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
