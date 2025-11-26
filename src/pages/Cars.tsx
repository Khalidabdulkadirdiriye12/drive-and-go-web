import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carSUV from "@/assets/car-suv.jpg";
import carSports from "@/assets/car-sports.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carElectric from "@/assets/car-electric.jpg";
import { Car, Fuel, Users, Settings } from "lucide-react";

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "Luxury SUV",
      price: "KES 8,500,000",
      image: carSUV,
      type: "SUV",
      fuel: "Diesel",
      seats: "7 Seats",
      transmission: "Automatic",
    },
    {
      id: 2,
      name: "Sports Coupe",
      price: "KES 12,000,000",
      image: carSports,
      type: "Sports",
      fuel: "Petrol",
      seats: "2 Seats",
      transmission: "Manual",
    },
    {
      id: 3,
      name: "Executive Sedan",
      price: "KES 6,200,000",
      image: carSedan,
      type: "Sedan",
      fuel: "Hybrid",
      seats: "5 Seats",
      transmission: "Automatic",
    },
    {
      id: 4,
      name: "Electric Premium",
      price: "KES 9,800,000",
      image: carElectric,
      type: "Electric",
      fuel: "Electric",
      seats: "5 Seats",
      transmission: "Automatic",
    },
    {
      id: 5,
      name: "Family SUV",
      price: "KES 7,200,000",
      image: carSUV,
      type: "SUV",
      fuel: "Petrol",
      seats: "7 Seats",
      transmission: "Automatic",
    },
    {
      id: 6,
      name: "Compact Sedan",
      price: "KES 4,500,000",
      image: carSedan,
      type: "Sedan",
      fuel: "Petrol",
      seats: "5 Seats",
      transmission: "Manual",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Car className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Premium Vehicles</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Browse Our </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Car Collection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover quality vehicles inspected and ready for you. From luxury SUVs to efficient sedans.
            </p>
          </div>

          {/* Cars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div
                key={car.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-glow">
                    {car.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{car.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Car className="h-5 w-5 text-primary" />
                      <span className="text-sm">{car.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Fuel className="h-5 w-5 text-secondary" />
                      <span className="text-sm">{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-5 w-5 text-tertiary" />
                      <span className="text-sm">{car.seats}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Settings className="h-5 w-5 text-accent" />
                      <span className="text-sm">{car.transmission}</span>
                    </div>
                  </div>
                  
                  <Link to={`/car/${car.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-card rounded-2xl p-12 border border-border shadow-soft">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us and we'll help you find the perfect vehicle that matches your needs and budget.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cars;
