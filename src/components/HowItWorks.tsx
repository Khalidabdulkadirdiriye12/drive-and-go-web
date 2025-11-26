import { Search, CheckCircle, Car, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Browse & Explore",
    description: "Search through our extensive collection of premium vehicles and travel tickets tailored to your needs.",
  },
  {
    icon: CheckCircle,
    number: "02",
    title: "Select Your Choice",
    description: "Choose the perfect car or ticket that matches your requirements and budget.",
  },
  {
    icon: Car,
    number: "03",
    title: "Complete Purchase",
    description: "Secure checkout process with multiple payment options for your convenience.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Start Your Journey",
    description: "Get ready to hit the road or board your travel with all arrangements taken care of.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your dream car or booking travel tickets is simple and straightforward with our seamless process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border z-0">
                  <div className="h-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              )}

              {/* Card */}
              <div className="relative bg-card rounded-2xl p-8 border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-large">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-medium">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <step.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
