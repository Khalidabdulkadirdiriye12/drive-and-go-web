import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fuel, Users, Gauge, Shield, Award, Calendar, ArrowLeft, ShoppingCart } from "lucide-react";
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
    description: "The Mercedes-Benz GLE combines luxury, performance, and versatility. Perfect for families and executives who demand the best.",
    features: ["4MATIC All-Wheel Drive", "Premium Sound System", "Panoramic Sunroof", "Advanced Safety Features"],
    year: 2024,
    mileage: "0 km",
    transmission: "Automatic",
    color: "Obsidian Black",
  },
  {
    id: 2,
    name: "BMW M4 Competition",
    price: "KES 14,200,000",
    image: carSports,
    specs: { speed: "290 km/h", seats: "4 Seats", fuel: "Petrol" },
    description: "Experience pure driving excitement with the BMW M4 Competition. Engineered for those who crave performance and precision.",
    features: ["Twin-Turbo Engine", "M Sport Exhaust", "Carbon Fiber Trim", "Track Mode"],
    year: 2024,
    mileage: "0 km",
    transmission: "8-Speed Automatic",
    color: "Isle of Man Green",
  },
  {
    id: 3,
    name: "Audi Q7 Premium",
    price: "KES 11,000,000",
    image: carSedan,
    specs: { speed: "240 km/h", seats: "7 Seats", fuel: "Hybrid" },
    description: "The Audi Q7 Premium offers sophisticated design, cutting-edge technology, and exceptional comfort for the modern driver.",
    features: ["Quattro AWD", "Virtual Cockpit", "Ambient Lighting", "Third Row Seating"],
    year: 2024,
    mileage: "0 km",
    transmission: "Automatic",
    color: "Glacier White",
  },
  {
    id: 4,
    name: "Tesla Model S",
    price: "KES 13,000,000",
    image: carElectric,
    specs: { speed: "250 km/h", seats: "5 Seats", fuel: "Electric" },
    description: "The Tesla Model S redefines electric performance with instant acceleration, autopilot capabilities, and zero emissions.",
    features: ["Autopilot", "Supercharger Access", "Premium Interior", "Long Range Battery"],
    year: 2024,
    mileage: "0 km",
    transmission: "Single-Speed",
    color: "Pearl White",
  },
];

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product: car, type: "car" } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Image */}
            <div className="animate-fade-in-up">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-[500px] object-cover rounded-2xl shadow-large"
              />
            </div>

            {/* Details */}
            <div className="animate-fade-in-up space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{car.name}</h1>
                <div className="text-4xl font-bold text-accent mb-6">{car.price}</div>
                <p className="text-lg text-muted-foreground">{car.description}</p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Gauge className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Top Speed</div>
                    <div className="font-bold">{car.specs.speed}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Capacity</div>
                    <div className="font-bold">{car.specs.seats}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Fuel className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Fuel Type</div>
                    <div className="font-bold">{car.specs.fuel}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-semibold">{car.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mileage</span>
                    <span className="font-semibold">{car.mileage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transmission</span>
                    <span className="font-semibold">{car.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Color</span>
                    <span className="font-semibold">{car.color}</span>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow"
                  onClick={handleBuyNow}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Schedule Test Drive
                </Button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {car.features.map((feature, index) => (
                <Card key={index} className="hover:border-accent transition-colors">
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-accent mb-3" />
                    <h3 className="font-semibold">{feature}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
                  <p className="text-muted-foreground">All vehicles inspected and certified</p>
                </div>
                <div>
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Warranty Included</h3>
                  <p className="text-muted-foreground">Comprehensive warranty coverage</p>
                </div>
                <div>
                  <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Flexible Financing</h3>
                  <p className="text-muted-foreground">Easy payment plans available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarDetail;
