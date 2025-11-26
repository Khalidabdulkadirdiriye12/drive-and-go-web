import { Shield, Zap, DollarSign, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Your safety and data security are our top priorities with industry-leading protection.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Quick bookings and instant confirmations. Get on the road or in the air faster.",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "Competitive pricing and exclusive deals you won't find anywhere else.",
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help, anytime you need assistance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-accent">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence, 
            reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Circle */}
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/60 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center w-full h-full bg-background border-2 border-accent rounded-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <benefit.icon className="h-10 w-10 text-accent" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 p-8 rounded-2xl bg-primary text-primary-foreground shadow-large">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm opacity-90">Vehicles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">50K+</div>
            <div className="text-sm opacity-90">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm opacity-90">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
