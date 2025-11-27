import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface CarSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const CarSearchBar = ({ value, onChange }: CarSearchBarProps) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search by make, model, or year..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-12 text-base"
      />
    </div>
  );
};

export default CarSearchBar;
