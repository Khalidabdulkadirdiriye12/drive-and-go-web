import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Executive",
    content: "Absolutely amazing service! Found my dream car and booked my vacation tickets all in one place. The process was seamless and the support team was incredibly helpful.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content: "Best car buying experience I've ever had. The team was professional, prices were competitive, and the whole process was transparent. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Travel Blogger",
    content: "The ticketing service is top-notch! I've booked multiple trips through them and every time it's been smooth sailing. Great prices and excellent customer service.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Marketing Manager",
    content: "Purchased a luxury SUV and couldn't be happier. The vehicle quality is outstanding and the after-sales service is exceptional. Will definitely return!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="border-2 hover:border-accent transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <Quote className="h-12 w-12 text-accent/20 mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-accent-foreground font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
