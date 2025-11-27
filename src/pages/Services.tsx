import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Car, Plane, Train, Package, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Premium Car Sales",
      description: "Browse our extensive collection of quality vehicles from sedans to SUVs",
      features: ["Quality Inspected", "Warranty Options", "Financing Available"],
      color: "text-primary",
      link: "/#cars"
    },
    {
      icon: Plane,
      title: "Flight Tickets",
      description: "Book domestic and international flights at competitive prices",
      features: ["Best Prices", "Instant Confirmation", "24/7 Support"],
      color: "text-secondary",
      link: "/#tickets"
    },
    {
      icon: Train,
      title: "Train Reservations",
      description: "Convenient train booking services for your travel needs",
      features: ["Easy Booking", "Flexible Options", "Group Discounts"],
      color: "text-tertiary",
      link: "/#tickets"
    },
    {
      icon: Package,
      title: "Travel Packages",
      description: "Customized travel packages for business and leisure",
      features: ["Custom Itineraries", "Best Deals", "Expert Planning"],
      color: "text-accent",
      link: "/#tickets"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for all your automotive and travel needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className={`h-14 w-14 ${service.color} mb-6`} />
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={service.link}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Learn More
                  </Button>
                </a>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Azhar Online</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Trusted & Reliable</h3>
                <p className="text-primary-foreground/80">
                  Years of experience serving satisfied customers
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fast Service</h3>
                <p className="text-primary-foreground/80">
                  Quick processing and delivery of services
                </p>
              </div>
              <div className="text-center">
                <Package className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Best Value</h3>
                <p className="text-primary-foreground/80">
                  Competitive pricing with premium quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
