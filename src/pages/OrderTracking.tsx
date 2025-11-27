import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Truck, Package, Home } from "lucide-react";

const OrderTracking = () => {
  const location = useLocation();
  const { orderId } = location.state || {};

  const orderStatuses = [
    { status: "Awaiting Payment", icon: Clock, completed: true },
    { status: "Payment Verification", icon: CheckCircle, completed: false },
    { status: "Payment Verified", icon: CheckCircle, completed: false },
    { status: "Procurement", icon: Package, completed: false },
    { status: "Shipped from Origin", icon: Truck, completed: false },
    { status: "Arrived in Kenya", icon: Package, completed: false },
    { status: "Clearing", icon: Clock, completed: false },
    { status: "Ready for Pickup", icon: Home, completed: false },
  ];

  if (!orderId) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">No Order Found</h1>
            <Link to="/cars">
              <Button>Browse Cars</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 text-center mb-12">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Order Submitted Successfully!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for your order. Your payment reference is:
            </p>
            <div className="bg-muted/30 px-6 py-3 rounded-lg inline-block">
              <span className="text-2xl font-bold text-primary">{orderId}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Please save this reference number for your records
            </p>
          </Card>

          <h2 className="text-2xl font-bold text-foreground mb-6">Order Status</h2>

          <div className="space-y-4">
            {orderStatuses.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 transition-all ${
                    item.completed
                      ? "border-accent bg-accent/5"
                      : "border-border opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-full ${
                        item.completed ? "bg-accent text-accent-foreground" : "bg-muted"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{item.status}</h3>
                      {item.completed && (
                        <p className="text-sm text-muted-foreground">Completed</p>
                      )}
                      {!item.completed && index === 1 && (
                        <p className="text-sm text-muted-foreground">
                          We're verifying your payment. This usually takes 1-2 business days.
                        </p>
                      )}
                    </div>
                    {item.completed && <CheckCircle className="h-6 w-6 text-accent" />}
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 bg-muted/30 p-6 rounded-lg">
            <h3 className="font-bold text-foreground mb-3">What Happens Next?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• We'll verify your payment within 1-2 business days</li>
              <li>• Once verified, we'll begin the procurement process</li>
              <li>• You'll receive email updates at each stage</li>
              <li>• The entire process typically takes 6-8 weeks</li>
              <li>• Contact us anytime for updates on your order</li>
            </ul>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <Link to="/cars">
              <Button variant="outline">Browse More Cars</Button>
            </Link>
            <Link to="/contact">
              <Button>Contact Support</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderTracking;
