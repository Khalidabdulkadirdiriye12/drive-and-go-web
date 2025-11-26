import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import Tickets from "@/components/Tickets";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <FeaturedCars />
        <HowItWorks />
        <Tickets />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
