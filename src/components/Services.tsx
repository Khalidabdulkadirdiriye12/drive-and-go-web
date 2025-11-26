import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ticket, Plane, Ship, Train, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Ticket,
    title: "Flight Tickets",
    description: "Book domestic and international flights with the best prices and flexible options.",
    features: ["Instant Booking", "24/7 Support", "Best Price Guarantee"],
  },
  {
    icon: Train,
    title: "Train Reservations",
    description: "Comfortable train travel across the country with premium seating options.",
    features: ["Reserved Seating", "Food Service", "Wi-Fi Onboard"],
  },
  {
    icon: Ship,
    title: "Cruise Packages",
    description: "Luxury cruise experiences to exotic destinations with all-inclusive packages.",
    features: ["All-Inclusive", "Entertainment", "Fine Dining"],
  },
  {
    icon: Plane,
    title: "Travel Packages",
    description: "Complete travel solutions including accommodation, transfers, and activities.",
    features: ["Custom Itinerary", "Hotel Booking", "Tour Guide"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete travel and ticketing solutions tailored to your needs. 
            Experience convenience at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group relative overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-large animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-6 relative">
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className="w-full bg-primary hover:bg-accent hover:text-accent-foreground group/btn"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
