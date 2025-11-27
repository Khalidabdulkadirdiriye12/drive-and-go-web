import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarFilters from "@/components/CarFilters";
import CarSearchBar from "@/components/CarSearchBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carSUV from "@/assets/car-suv.jpg";
import carSports from "@/assets/car-sports.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carElectric from "@/assets/car-electric.jpg";
import { Car, Fuel, Gauge, MapPin } from "lucide-react";

const Cars = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    country: "all",
    minPrice: 0,
    maxPrice: 20000000,
    make: "all",
    year: "all",
    condition: "all",
    transmission: "all",
  });

  const allCars = [
    {
      id: 1,
      name: "Mercedes-Benz GLE",
      make: "Mercedes-Benz",
      model: "GLE",
      price: 8500000,
      image: carSUV,
      type: "SUV",
      fuel: "Diesel",
      year: "2023",
      mileage: "15,000 km",
      transmission: "Automatic",
      condition: "Used",
      country: "USA",
    },
    {
      id: 2,
      name: "BMW M4 Competition",
      make: "BMW",
      model: "M4",
      price: 12000000,
      image: carSports,
      type: "Sports",
      fuel: "Petrol",
      year: "2024",
      mileage: "5,000 km",
      transmission: "Manual",
      condition: "New",
      country: "Japan",
    },
    {
      id: 3,
      name: "Audi Q7 Premium",
      make: "Audi",
      model: "Q7",
      price: 6200000,
      image: carSedan,
      type: "Sedan",
      fuel: "Hybrid",
      year: "2022",
      mileage: "30,000 km",
      transmission: "Automatic",
      condition: "Used",
      country: "Thailand",
    },
    {
      id: 4,
      name: "Tesla Model S",
      make: "Tesla",
      model: "Model S",
      price: 9800000,
      image: carElectric,
      type: "Electric",
      fuel: "Electric",
      year: "2024",
      mileage: "2,000 km",
      transmission: "Automatic",
      condition: "New",
      country: "USA",
    },
    {
      id: 5,
      name: "Toyota Land Cruiser",
      make: "Toyota",
      model: "Land Cruiser",
      price: 7200000,
      image: carSUV,
      type: "SUV",
      fuel: "Diesel",
      year: "2023",
      mileage: "12,000 km",
      transmission: "Automatic",
      condition: "Used",
      country: "Japan",
    },
    {
      id: 6,
      name: "Honda Accord",
      make: "Honda",
      model: "Accord",
      price: 4500000,
      image: carSedan,
      type: "Sedan",
      fuel: "Petrol",
      year: "2021",
      mileage: "45,000 km",
      transmission: "Manual",
      condition: "Used",
      country: "China",
    },
  ];

  // Filter and search logic
  const filteredCars = allCars.filter((car) => {
    const matchesSearch =
      searchQuery === "" ||
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.year.includes(searchQuery);

    const matchesCountry = filters.country === "all" || car.country === filters.country;
    const matchesPrice = car.price >= filters.minPrice && car.price <= filters.maxPrice;
    const matchesMake = filters.make === "all" || car.make === filters.make;
    const matchesYear = filters.year === "all" || car.year === filters.year;
    const matchesCondition = filters.condition === "all" || car.condition === filters.condition;
    const matchesTransmission = filters.transmission === "all" || car.transmission === filters.transmission;

    return (
      matchesSearch &&
      matchesCountry &&
      matchesPrice &&
      matchesMake &&
      matchesYear &&
      matchesCondition &&
      matchesTransmission
    );
  });

  const handleResetFilters = () => {
    setFilters({
      country: "all",
      minPrice: 0,
      maxPrice: 20000000,
      make: "all",
      year: "all",
      condition: "all",
      transmission: "all",
    });
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Car className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Import Quality Vehicles</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Premium Cars from </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Around the World</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We source quality vehicles from USA, Japan, Thailand, and China. Browse, order, and we'll handle the import process.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <CarSearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <CarFilters filters={filters} onFilterChange={setFilters} onReset={handleResetFilters} />
            </div>

            {/* Cars Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  {filteredCars.length} {filteredCars.length === 1 ? "vehicle" : "vehicles"} found
                </p>
              </div>

              {filteredCars.length === 0 ? (
                <div className="text-center py-16">
                  <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No vehicles found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
                  <Button onClick={handleResetFilters} variant="outline">
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCars.map((car, index) => (
                    <div
                      key={car.id}
                      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 border border-border animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold shadow-glow">
                          KES {(car.price / 1000000).toFixed(1)}M
                        </div>
                        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {car.country}
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-xl font-bold text-foreground mb-3">{car.name}</h3>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Car className="h-4 w-4 text-primary" />
                            <span className="text-sm">{car.year}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Gauge className="h-4 w-4 text-secondary" />
                            <span className="text-sm">{car.mileage}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Fuel className="h-4 w-4 text-accent" />
                            <span className="text-sm">{car.fuel}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-sm">{car.condition}</span>
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
              )}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-card rounded-2xl p-12 border border-border shadow-soft">
            <h2 className="text-3xl font-bold text-foreground mb-4">Looking for Something Specific?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the exact car you want? Contact us and we'll source it for you from our international partners.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow">
                Request Custom Import
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
