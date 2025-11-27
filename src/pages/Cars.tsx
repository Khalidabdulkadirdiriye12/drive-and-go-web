import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarFilters from "@/components/CarFilters";
import CarSearchBar from "@/components/CarSearchBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Fuel, Gauge, MapPin } from "lucide-react";
import { carsAPI, Car as CarType } from "@/services/api";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Cars = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [filters, setFilters] = useState({
    country: "all",
    minPrice: 0,
    maxPrice: 20000000,
    make: "all",
    year: "all",
    condition: "all",
    transmission: "all",
  });

  const fetchCars = async () => {
    setLoading(true);
    try {
      const apiFilters: any = {
        status: 'available',
      };
      
      if (searchQuery) apiFilters.search = searchQuery;
      if (filters.country !== "all") apiFilters.country = filters.country;
      if (filters.make !== "all") apiFilters.make = filters.make;
      if (filters.year !== "all") apiFilters.year = filters.year;
      if (filters.condition !== "all") apiFilters.condition = filters.condition;
      if (sortBy) apiFilters.ordering = sortBy;

      const data = await carsAPI.listCars(apiFilters);
      
      // Client-side price filtering
      const filtered = data.filter((car) => {
        const price = parseFloat(car.price);
        return price >= filters.minPrice && price <= filters.maxPrice;
      });
      
      setCars(filtered);
    } catch (error: any) {
      toast.error('Failed to load cars');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, [searchQuery, filters, sortBy]);

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
          <div className="mb-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-1">
                <CarSearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="created_at">Newest First</SelectItem>
                  <SelectItem value="-created_at">Oldest First</SelectItem>
                  <SelectItem value="price">Price: Low to High</SelectItem>
                  <SelectItem value="-price">Price: High to Low</SelectItem>
                  <SelectItem value="year">Year: Old to New</SelectItem>
                  <SelectItem value="-year">Year: New to Old</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
                  {cars.length} {cars.length === 1 ? "vehicle" : "vehicles"} found
                </p>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : cars.length === 0 ? (
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
                  {cars.map((car, index) => (
                    <div
                      key={car.id}
                      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 border border-border animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="relative overflow-hidden">
                        {car.image ? (
                          <img
                            src={car.image}
                            alt={`${car.make} ${car.model}`}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-48 bg-muted flex items-center justify-center">
                            <Car className="h-16 w-16 text-muted-foreground" />
                          </div>
                        )}
                        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold shadow-glow">
                          KES {(parseFloat(car.price) / 1000000).toFixed(1)}M
                        </div>
                        {car.country && (
                          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {car.country}
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {car.make} {car.model}
                        </h3>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Car className="h-4 w-4 text-primary" />
                            <span className="text-sm">{car.year}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 text-secondary" />
                            <span className="text-sm capitalize">{car.car_type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Gauge className="h-4 w-4 text-accent" />
                            <span className="text-sm capitalize">{car.condition}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Fuel className="h-4 w-4 text-primary" />
                            <span className="text-sm">{car.country || 'N/A'}</span>
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
