import { Card } from "@/components/ui/card";
import { Car, Fuel, Gauge, Settings, Calendar, MapPin, Flag } from "lucide-react";

interface CarSpec {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface CarSpecsSectionProps {
  specs: {
    make: string;
    model: string;
    year: string;
    mileage: string;
    engine: string;
    transmission: string;
    condition: string;
    country: string;
  };
}

const CarSpecsSection = ({ specs }: CarSpecsSectionProps) => {
  const specsList: CarSpec[] = [
    { icon: <Car className="h-5 w-5" />, label: "Make & Model", value: `${specs.make} ${specs.model}` },
    { icon: <Calendar className="h-5 w-5" />, label: "Year", value: specs.year },
    { icon: <Gauge className="h-5 w-5" />, label: "Mileage", value: specs.mileage },
    { icon: <Fuel className="h-5 w-5" />, label: "Engine", value: specs.engine },
    { icon: <Settings className="h-5 w-5" />, label: "Transmission", value: specs.transmission },
    { icon: <Flag className="h-5 w-5" />, label: "Condition", value: specs.condition },
    { icon: <MapPin className="h-5 w-5" />, label: "Origin Country", value: specs.country },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-foreground mb-6">Specifications</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specsList.map((spec, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
            <div className="text-primary mt-1">{spec.icon}</div>
            <div>
              <p className="text-sm text-muted-foreground">{spec.label}</p>
              <p className="font-semibold text-foreground">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CarSpecsSection;
