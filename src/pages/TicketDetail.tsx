import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Train, Ship, Bus, Calendar, MapPin, Clock, Users, ArrowLeft, ShoppingCart, Luggage, Wifi, Coffee } from "lucide-react";

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
    departure: "07:00 AM",
    arrival: "08:15 AM",
    carrier: "Kenya Airways",
    amenities: ["Luggage Allowance", "In-flight Snacks", "Priority Boarding"],
    description: "Fast and convenient flight from Nairobi to the beautiful coastal city of Mombasa. Perfect for business or leisure travel.",
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
    departure: "09:30 AM",
    arrival: "10:25 AM",
    carrier: "Jambojet",
    amenities: ["Luggage Allowance", "Refreshments", "Online Check-in"],
    description: "Quick flight to Kisumu, gateway to Lake Victoria and Western Kenya attractions.",
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
    departure: "08:00 AM",
    arrival: "01:30 PM",
    carrier: "Madaraka Express",
    amenities: ["Comfortable Seating", "Dining Car", "WiFi", "Scenic Views"],
    description: "Experience the iconic SGR journey with comfortable seating, dining options, and stunning views of the Kenyan landscape.",
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
    departure: "Multiple Times",
    arrival: "Varies",
    carrier: "Modern Coast",
    amenities: ["Reclining Seats", "AC", "WiFi", "Entertainment"],
    description: "Comfortable executive bus service with modern amenities for your journey to Nakuru.",
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
    departure: "06:45 AM",
    arrival: "07:45 AM",
    carrier: "Fly540",
    amenities: ["Luggage Included", "Refreshments", "Flexible Booking"],
    description: "Morning flight to Eldoret, ideal for business travelers and tourists heading to the Rift Valley.",
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
    departure: "08:00 AM",
    arrival: "02:00 PM",
    carrier: "Coastal Ferries",
    amenities: ["Open Deck", "Refreshments", "Luggage Space", "Scenic Route"],
    description: "Scenic ferry journey along the Kenyan coast to the historic island of Lamu.",
  },
];

const TicketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ticket = tickets.find((t) => t.id === Number(id));

  if (!ticket) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Ticket Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = ticket.icon;

  const handleBookNow = () => {
    navigate("/checkout", { state: { product: ticket, type: "ticket" } });
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

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="animate-fade-in-up border-2">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                        <Icon className="h-5 w-5 text-accent" />
                        <span className="font-semibold text-accent">{ticket.type}</span>
                      </div>
                      <h1 className="text-4xl font-bold mb-2">{ticket.route}</h1>
                      <p className="text-lg text-muted-foreground">{ticket.carrier}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">From</div>
                      <div className="text-4xl font-bold text-accent">{ticket.price}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8">{ticket.description}</p>

                  {/* Journey Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-accent" />
                        <div>
                          <div className="text-sm text-muted-foreground">Travel Date</div>
                          <div className="font-semibold">{ticket.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <div>
                          <div className="text-sm text-muted-foreground">Duration</div>
                          <div className="font-semibold">{ticket.duration}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <div>
                          <div className="text-sm text-muted-foreground">Departure</div>
                          <div className="font-semibold">{ticket.departure}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <div>
                          <div className="text-sm text-muted-foreground">Arrival</div>
                          <div className="font-semibold">{ticket.arrival}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="font-semibold">Class: {ticket.class}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="animate-fade-in-up">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Included Amenities</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {ticket.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        {index % 4 === 0 && <Luggage className="h-5 w-5 text-accent" />}
                        {index % 4 === 1 && <Coffee className="h-5 w-5 text-accent" />}
                        {index % 4 === 2 && <Wifi className="h-5 w-5 text-accent" />}
                        {index % 4 === 3 && <Users className="h-5 w-5 text-accent" />}
                        <span className="font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Card */}
            <div>
              <Card className="animate-fade-in-up sticky top-32 border-2 border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Book Your Ticket</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ticket Price</span>
                      <span className="font-bold text-accent">{ticket.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service Fee</span>
                      <span className="font-semibold">KES 200</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="font-bold">Total</span>
                        <span className="font-bold text-2xl text-accent">
                          KES {parseInt(ticket.price.replace(/[^\d]/g, '')) + 200}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow mb-4"
                    onClick={handleBookNow}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>Instant booking confirmation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>Free cancellation up to 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>Secure payment processing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TicketDetail;
