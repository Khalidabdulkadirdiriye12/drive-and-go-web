import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Train, Ship, Bus, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const tickets = [
  {
    id: 1,
    type: "Flight",
    icon: Plane,
    route: "Nairobi → Mombasa",
    price: "KES 8,500",
    date: "Available Daily",
    duration: "1h 15m",
    class: "Economy",
  },
  {
    id: 2,
    type: "Flight",
    icon: Plane,
    route: "Nairobi → Kisumu",
    price: "KES 7,200",
    date: "Available Daily",
    duration: "55m",
    class: "Economy",
  },
  {
    id: 3,
    type: "Train",
    icon: Train,
    route: "Nairobi → Mombasa",
    price: "KES 3,000",
    date: "Daily Departures",
    duration: "5h 30m",
    class: "Standard",
  },
  {
    id: 4,
    type: "Bus",
    icon: Bus,
    route: "Nairobi → Nakuru",
    price: "KES 1,500",
    date: "Multiple Daily",
    duration: "2h 30m",
    class: "Executive",
  },
  {
    id: 5,
    type: "Flight",
    icon: Plane,
    route: "Nairobi → Eldoret",
    price: "KES 6,800",
    date: "Available Daily",
    duration: "1h",
    class: "Economy",
  },
  {
    id: 6,
    type: "Ferry",
    icon: Ship,
    route: "Mombasa → Lamu",
    price: "KES 4,500",
    date: "Weekly Departures",
    duration: "6h",
    class: "Standard",
  },
];

const Tickets = () => {
  return (
    <section id="tickets" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="text-accent">Tickets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Travel across Kenya with ease. Book flights, trains, buses, and ferry tickets at the best prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket, index) => (
            <Card 
              key={ticket.id}
              className="group relative overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-large animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-6 relative">
                {/* Icon and Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <ticket.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-accent">{ticket.type}</span>
                </div>

                {/* Route */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {ticket.route}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{ticket.date}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{ticket.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Class:</span>
                    <span className="font-medium">{ticket.class}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">From</div>
                    <div className="text-2xl font-bold text-accent">{ticket.price}</div>
                  </div>
                  <Link to={`/ticket/${ticket.id}`}>
                    <Button className="bg-primary hover:bg-accent hover:text-accent-foreground">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
