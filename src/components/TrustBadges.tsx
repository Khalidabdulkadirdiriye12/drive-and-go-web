import { Shield, Award, Users, ThumbsUp, CheckCircle, Star } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Verified Dealer",
    description: "Certified & Licensed",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Best Service 2024",
  },
  {
    icon: Users,
    title: "50K+ Customers",
    description: "Trusted Nationwide",
  },
  {
    icon: ThumbsUp,
    title: "98% Satisfaction",
    description: "Highly Rated",
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    description: "Inspected Vehicles",
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "Excellence Always",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Why <span className="text-accent">Trust Us</span>
          </h3>
          <p className="text-muted-foreground">
            Your satisfaction and trust are our top priorities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <badge.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
