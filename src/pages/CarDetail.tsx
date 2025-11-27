import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarSpecsSection from "@/components/CarSpecsSection";
import CostBreakdown from "@/components/CostBreakdown";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Clock, Headphones, Car as CarIcon } from "lucide-react";
import { carsAPI, Car } from "@/services/api";
import { toast } from "sonner";
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
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const data = await carsAPI.getCarDetail(parseInt(id || "0"));
        setCar(data);
      } catch (error: any) {
        toast.error('Failed to load car details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            {/* Image */}
            <div className="animate-fade-in-up">
              <div className="rounded-2xl overflow-hidden shadow-large">
                {car.image ? (
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] md:h-[500px] bg-muted flex items-center justify-center">
                    <CarIcon className="h-32 w-32 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>

            {/* Car Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {car.country && (
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {car.country}
                </div>
              )}
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {car.make} {car.model}
              </h1>
              {car.description && (
                <p className="text-lg text-muted-foreground mb-8">{car.description}</p>
              )}

              {/* Price Display */}
              <Card className="p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Price</h3>
                <div className="text-3xl font-bold text-accent">
                  KES {parseFloat(car.price).toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Base price - Additional costs may apply
                </p>
              </Card>

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
            <CarSpecsSection specs={{
              make: car.make,
              model: car.model,
              year: car.year.toString(),
              condition: car.condition,
              country: car.country || 'N/A',
              mileage: 'Contact for details',
              engine: 'Contact for details',
              transmission: 'Contact for details',
            }} />
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
