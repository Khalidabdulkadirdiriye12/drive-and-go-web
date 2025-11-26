import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Train, Ship, Calendar, MapPin, Clock } from "lucide-react";

const Tickets = () => {
  const tickets = [
    {
      id: 1,
      title: "Nairobi to Mombasa",
      type: "Flight",
      icon: Plane,
      price: "KES 8,500",
      duration: "1h 15m",
      departure: "Daily Departures",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: 2,
      title: "SGR Train Ticket",
      type: "Train",
      icon: Train,
      price: "KES 1,500",
      duration: "4h 30m",
      departure: "Multiple Daily",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      id: 3,
      title: "Nairobi to Dubai",
      type: "International Flight",
      icon: Plane,
      price: "KES 45,000",
      duration: "5h 30m",
      departure: "3 Flights Weekly",
      color: "text-tertiary",
      bgColor: "bg-tertiary/10",
    },
    {
      id: 4,
      title: "Coastal Ferry",
      type: "Ferry",
      icon: Ship,
      price: "KES 2,800",
      duration: "2h 00m",
      departure: "Weekends",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      id: 5,
      title: "Nairobi to Kisumu",
      type: "Flight",
      icon: Plane,
      price: "KES 12,000",
      duration: "55 minutes",
      departure: "Daily",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: 6,
      title: "Express Train",
      type: "Train",
      icon: Train,
      price: "KES 3,200",
      duration: "6h 00m",
      departure: "Daily",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <Plane className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-semibold text-sm">Travel Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Book Your </span>
              <span className="bg-gradient-secondary bg-clip-text text-transparent">Travel Tickets</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From flights to trains, book your travel tickets easily and at the best prices.
            </p>
          </div>

          {/* Tickets Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tickets.map((ticket, index) => (
              <div
                key={ticket.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${ticket.bgColor} p-8 relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 ${ticket.bgColor} rounded-full flex items-center justify-center border-2 ${ticket.color.replace('text-', 'border-')}`}>
                      <ticket.icon className={`h-7 w-7 ${ticket.color}`} />
                    </div>
                    <span className={`${ticket.color} font-bold text-sm px-3 py-1 bg-card rounded-full`}>
                      {ticket.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{ticket.title}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{ticket.departure}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-5 w-5 text-secondary" />
                      <span>Duration: {ticket.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-foreground">{ticket.price}</span>
                    <span className="text-sm text-muted-foreground">per person</span>
                  </div>
                  
                  <Link to={`/ticket/${ticket.id}`}>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Flexible Booking</h3>
              <p className="text-muted-foreground">
                Book in advance or last minute with easy rescheduling options
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft text-center">
              <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Multiple Routes</h3>
              <p className="text-muted-foreground">
                Wide selection of domestic and international travel routes
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft text-center">
              <Clock className="h-12 w-12 text-tertiary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock customer service for all your travel needs
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-card rounded-2xl p-12 border border-border shadow-soft">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Help Planning Your Trip?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our travel experts are ready to assist you with custom travel packages and group bookings.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tickets;
