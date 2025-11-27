import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Azhar Online
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for premium car import services from USA, Japan, Thailand, and China.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded with a vision to revolutionize the car import industry in East Africa, 
                Azhar Online has grown to become a trusted name in international vehicle procurement and import services.
              </p>
              <p className="text-muted-foreground mb-4">
                Located in the heart of Nairobi at BBs Mall, we serve customers across Kenya, 
                providing exceptional service and seamless import experiences from USA, Japan, Thailand, and China.
              </p>
              <p className="text-muted-foreground">
                Our commitment to transparency, quality, and customer satisfaction has made us the preferred choice 
                for car imports in Kenya.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Prime Location</h3>
                <p className="text-sm text-muted-foreground">BBs Mall, Nairobi</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Professional staff</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <Target className="h-12 w-12 text-tertiary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Customer Focus</h3>
                <p className="text-sm text-muted-foreground">Your satisfaction first</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft border border-border">
                <Award className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-bold text-foreground mb-2">Quality Service</h3>
                <p className="text-sm text-muted-foreground">Excellence guaranteed</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Trust</h3>
                <p className="text-primary-foreground/80">
                  Building lasting relationships through transparency and reliability
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-primary-foreground/80">
                  Delivering superior quality in every product and service
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-primary-foreground/80">
                  Continuously improving to meet evolving customer needs
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

export default About;
