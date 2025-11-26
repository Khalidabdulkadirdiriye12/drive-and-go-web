import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import heroCar from "@/assets/hero-car.jpg";
import heroTicketing from "@/assets/hero-ticketing.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
              <span className="text-accent font-semibold text-sm">Premium Auto & Travel Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Drive Your Dream,{" "}
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                Travel Anywhere
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Discover premium vehicles and seamless ticketing services all in one place. 
              Your journey to excellence starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cars">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow group w-full sm:w-auto"
                >
                  Browse Cars
                  <Car className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/tickets">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary hover:bg-primary hover:text-primary-foreground group w-full sm:w-auto"
                >
                  Book Ticket
                  <Ticket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Cars Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Split Images */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <img 
                src={heroCar} 
                alt="Luxury Car" 
                className="relative rounded-2xl shadow-large w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-2 text-accent">
                  <Car className="h-5 w-5" />
                  <span className="font-semibold">Premium Vehicles</span>
                </div>
              </div>
            </div>

            <div className="relative group mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <img 
                src={heroTicketing} 
                alt="Ticketing Services" 
                className="relative rounded-2xl shadow-large w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-2 text-accent">
                  <Ticket className="h-5 w-5" />
                  <span className="font-semibold">Travel Tickets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
