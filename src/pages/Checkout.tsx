import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Upload, CheckCircle, Building2 } from "lucide-react";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { product, type } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentType: "deposit",
    bankSlip: null as File | null,
  });

  const paymentReference = `AZH${Date.now().toString().slice(-8)}`;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">No Product Selected</h1>
            <Link to="/cars">
              <Button>Browse Cars</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, bankSlip: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!formData.bankSlip) {
      toast({
        title: "Error",
        description: "Please upload your bank payment slip",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Order Submitted!",
      description: `Your order has been received. Payment Reference: ${paymentReference}`,
    });

    setTimeout(() => {
      navigate("/order-tracking", { state: { orderId: paymentReference } });
    }, 2000);
  };

  const finalPrice =
    type === "car"
      ? product.basePrice +
        product.shippingEstimate +
        product.dutyEstimate +
        product.clearingEstimate
      : product.price;

  const depositAmount = Math.round(finalPrice * 0.3);
  const paymentAmount = formData.paymentType === "deposit" ? depositAmount : finalPrice;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link to="/cars">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-8">Complete Your Order</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Delivery Address */}
                {type === "car" && (
                  <Card className="p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">Delivery Address</h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </Card>
                )}

                {/* Payment Information */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Payment Information</h2>

                  {/* Payment Type Selection */}
                  <div className="mb-6">
                    <Label className="mb-3 block">Payment Type</Label>
                    <RadioGroup
                      value={formData.paymentType}
                      onValueChange={(value) => setFormData({ ...formData, paymentType: value })}
                    >
                      <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                        <RadioGroupItem value="deposit" id="deposit" />
                        <Label htmlFor="deposit" className="flex-1 cursor-pointer">
                          <span className="font-semibold">30% Deposit</span>
                          <span className="text-sm text-muted-foreground block">
                            Pay KES {depositAmount.toLocaleString()} now, balance on delivery (Recommended)
                          </span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                        <RadioGroupItem value="full" id="full" />
                        <Label htmlFor="full" className="flex-1 cursor-pointer">
                          <span className="font-semibold">Full Payment</span>
                          <span className="text-sm text-muted-foreground block">
                            Pay KES {finalPrice.toLocaleString()} now
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Bank Details */}
                  <div className="bg-muted/30 p-6 rounded-lg mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-foreground">Bank Payment Details</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bank Name:</span>
                        <span className="font-semibold">Co-operative Bank of Kenya</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Account Name:</span>
                        <span className="font-semibold">AZHAR ONLINE PAYMENT LTD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Account Number:</span>
                        <span className="font-semibold">01129465321000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Payment Reference:</span>
                        <span className="font-semibold text-primary">{paymentReference}</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between text-base">
                        <span className="font-semibold">Amount to Pay:</span>
                        <span className="font-bold text-primary">
                          KES {paymentAmount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Upload Bank Slip */}
                  <div>
                    <Label htmlFor="bankSlip" className="mb-2 block">
                      Upload Bank Payment Slip *
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <input
                        type="file"
                        id="bankSlip"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="bankSlip" className="cursor-pointer">
                        {formData.bankSlip ? (
                          <div className="flex items-center justify-center gap-2 text-accent">
                            <CheckCircle className="h-5 w-5" />
                            <span className="font-semibold">{formData.bankSlip.name}</span>
                          </div>
                        ) : (
                          <>
                            <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              Click to upload your bank slip (JPG, PNG, or PDF)
                            </p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                </Card>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 font-semibold text-lg h-14">
                  Submit Order
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-4">
                  <img
                    src={type === "car" ? (product.images?.[0] || product.image) : product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="font-bold text-foreground">{product.name}</h3>
                    {type === "car" && (
                      <p className="text-sm text-muted-foreground">
                        {product.specs.year} • {product.specs.country}
                      </p>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    {type === "car" && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Base Price:</span>
                          <span>KES {product.basePrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Shipping:</span>
                          <span>KES {product.shippingEstimate.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Import Duty:</span>
                          <span>KES {product.dutyEstimate.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Clearing:</span>
                          <span>KES {product.clearingEstimate.toLocaleString()}</span>
                        </div>
                      </>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total Amount:</span>
                      <span>KES {finalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-accent font-bold text-lg">
                      <span>Amount to Pay Now:</span>
                      <span>KES {paymentAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
