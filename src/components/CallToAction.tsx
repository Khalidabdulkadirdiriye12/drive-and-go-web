import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          
          {/* Content */}
          <div className="relative px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-accent font-semibold text-sm">Limited Time Offer</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Start Your Journey?
              </h2>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                Whether you're looking for your dream car or planning your next adventure, we're here to make it happen. Contact us today for exclusive deals!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/cars">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow group w-full sm:w-auto"
                  >
                    Explore Vehicles
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary text-primary-foreground font-semibold w-full sm:w-auto"
                  >
                    Contact Us Now
                  </Button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-foreground/90">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-medium">0797771277</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-primary-foreground/20" />
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="font-medium">info@azharonline.co.ke</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
