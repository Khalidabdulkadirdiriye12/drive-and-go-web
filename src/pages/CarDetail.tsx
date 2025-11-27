import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarSpecsSection from "@/components/CarSpecsSection";
import CostBreakdown from "@/components/CostBreakdown";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Clock, Headphones } from "lucide-react";
import carSUV from "@/assets/car-suv.jpg";
import carSports from "@/assets/car-sports.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carElectric from "@/assets/car-electric.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      name: "Mercedes-Benz GLE",
      make: "Mercedes-Benz",
      model: "GLE",
      basePrice: 8500000,
      shippingEstimate: 450000,
      dutyEstimate: 1200000,
      clearingEstimate: 180000,
      images: [carSUV, carSUV, carSUV],
      specs: {
        make: "Mercedes-Benz",
        model: "GLE",
        year: "2023",
        mileage: "15,000 km",
        engine: "3.0L V6 Turbo",
        transmission: "Automatic",
        condition: "Used",
        country: "USA",
      },
      description:
        "Experience luxury and performance with this Mercedes-Benz GLE. This premium SUV combines cutting-edge technology, exceptional comfort, and powerful performance. Imported from the USA with full service history.",
      features: [
        "Panoramic sunroof",
        "Leather interior",
        "Advanced safety systems",
        "Premium sound system",
        "Navigation system",
        "Parking sensors",
        "Heated seats",
        "Keyless entry",
      ],
    },
    {
      id: 2,
      name: "BMW M4 Competition",
      make: "BMW",
      model: "M4",
      basePrice: 12000000,
      shippingEstimate: 520000,
      dutyEstimate: 1650000,
      clearingEstimate: 220000,
      images: [carSports, carSports, carSports],
      specs: {
        make: "BMW",
        model: "M4 Competition",
        year: "2024",
        mileage: "5,000 km",
        engine: "3.0L I6 Twin-Turbo",
        transmission: "Manual",
        condition: "New",
        country: "Japan",
      },
      description:
        "Pure driving excitement with the BMW M4 Competition. This high-performance sports car delivers exceptional power and precision. Brand new import from Japan.",
      features: [
        "M Sport exhaust",
        "Carbon fiber trim",
        "M Sport brakes",
        "Performance seats",
        "Track mode",
        "Launch control",
        "Digital cockpit",
        "Adaptive suspension",
      ],
    },
    {
      id: 3,
      name: "Audi Q7 Premium",
      make: "Audi",
      model: "Q7",
      basePrice: 6200000,
      shippingEstimate: 380000,
      dutyEstimate: 950000,
      clearingEstimate: 150000,
      images: [carSedan, carSedan, carSedan],
      specs: {
        make: "Audi",
        model: "Q7 Premium",
        year: "2022",
        mileage: "30,000 km",
        engine: "3.0L V6 Hybrid",
        transmission: "Automatic",
        condition: "Used",
        country: "Thailand",
      },
      description:
        "The Audi Q7 offers spacious luxury with hybrid efficiency. Perfect for families seeking comfort and advanced technology. Imported from Thailand in excellent condition.",
      features: [
        "Virtual cockpit",
        "7-seater configuration",
        "Matrix LED headlights",
        "Quattro AWD",
        "Adaptive cruise control",
        "Premium audio",
        "Wireless charging",
        "360° camera",
      ],
    },
    {
      id: 4,
      name: "Tesla Model S",
      make: "Tesla",
      model: "Model S",
      basePrice: 9800000,
      shippingEstimate: 480000,
      dutyEstimate: 1350000,
      clearingEstimate: 190000,
      images: [carElectric, carElectric, carElectric],
      specs: {
        make: "Tesla",
        model: "Model S",
        year: "2024",
        mileage: "2,000 km",
        engine: "Dual Motor Electric",
        transmission: "Automatic",
        condition: "New",
        country: "USA",
      },
      description:
        "Revolutionary electric performance sedan. The Tesla Model S combines cutting-edge technology with zero emissions. Brand new from USA with full warranty.",
      features: [
        "Autopilot capability",
        "15-inch touchscreen",
        "Over-the-air updates",
        "Glass roof",
        "Premium interior",
        "Supercharger access",
        "Ludicrous mode",
        "Air suspension",
      ],
    },
  ];

  const car = cars.find((c) => c.id === parseInt(id || "0"));

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Car Not Found</h1>
            <Link to="/cars">
              <Button>Back to Cars</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleOrderClick = () => {
    navigate("/checkout", { state: { product: car, type: "car" } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/cars">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cars
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Image Gallery */}
            <div className="animate-fade-in-up">
              <Carousel className="w-full">
                <CarouselContent>
                  {car.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="rounded-2xl overflow-hidden shadow-large">
                        <img
                          src={image}
                          alt={`${car.name} - Image ${index + 1}`}
                          className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Car Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {car.specs.country}
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{car.name}</h1>
              <p className="text-lg text-muted-foreground mb-8">{car.description}</p>

              {/* Cost Breakdown */}
              <CostBreakdown
                basePrice={car.basePrice}
                shippingEstimate={car.shippingEstimate}
                dutyEstimate={car.dutyEstimate}
                clearingEstimate={car.clearingEstimate}
              />

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <Button
                  onClick={handleOrderClick}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow text-lg h-14"
                >
                  Order This Car
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full h-12">
                    <Headphones className="h-5 w-5 mr-2" />
                    Contact Us for More Info
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CarSpecsSection specs={car.specs} />
          </div>

          {/* Features */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Quality Guaranteed</h4>
              <p className="text-sm text-muted-foreground">
                All vehicles thoroughly inspected before import
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Fast Processing</h4>
              <p className="text-sm text-muted-foreground">
                Efficient import and clearing process
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Headphones className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Full Support</h4>
              <p className="text-sm text-muted-foreground">
                Dedicated team to help throughout the process
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetail;
