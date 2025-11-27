import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface CarFiltersProps {
  filters: {
    country: string;
    minPrice: number;
    maxPrice: number;
    make: string;
    year: string;
    condition: string;
    transmission: string;
  };
  onFilterChange: (filters: any) => void;
  onReset: () => void;
}

const CarFilters = ({ filters, onFilterChange, onReset }: CarFiltersProps) => {
  const handlePriceChange = (values: number[]) => {
    onFilterChange({ ...filters, minPrice: values[0], maxPrice: values[1] });
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        <Button variant="ghost" size="sm" onClick={onReset}>
          <X className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>

      {/* Country of Origin */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Country of Origin</label>
        <Select value={filters.country} onValueChange={(value) => onFilterChange({ ...filters, country: value })}>
          <SelectTrigger>
            <SelectValue placeholder="All Countries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            <SelectItem value="USA">USA</SelectItem>
            <SelectItem value="Japan">Japan</SelectItem>
            <SelectItem value="Thailand">Thailand</SelectItem>
            <SelectItem value="China">China</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Price Range (KES)</label>
        <div className="px-2">
          <Slider
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={handlePriceChange}
            min={0}
            max={20000000}
            step={100000}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>KES {filters.minPrice.toLocaleString()}</span>
          <span>KES {filters.maxPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Make/Brand */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Make</label>
        <Select value={filters.make} onValueChange={(value) => onFilterChange({ ...filters, make: value })}>
          <SelectTrigger>
            <SelectValue placeholder="All Makes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Makes</SelectItem>
            <SelectItem value="Toyota">Toyota</SelectItem>
            <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
            <SelectItem value="BMW">BMW</SelectItem>
            <SelectItem value="Audi">Audi</SelectItem>
            <SelectItem value="Tesla">Tesla</SelectItem>
            <SelectItem value="Honda">Honda</SelectItem>
            <SelectItem value="Nissan">Nissan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Year */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Year</label>
        <Select value={filters.year} onValueChange={(value) => onFilterChange({ ...filters, year: value })}>
          <SelectTrigger>
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
            <SelectItem value="2019">2019</SelectItem>
            <SelectItem value="2018">2018</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Condition */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Condition</label>
        <Select value={filters.condition} onValueChange={(value) => onFilterChange({ ...filters, condition: value })}>
          <SelectTrigger>
            <SelectValue placeholder="All Conditions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Conditions</SelectItem>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Used">Used</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Transmission */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Transmission</label>
        <Select value={filters.transmission} onValueChange={(value) => onFilterChange({ ...filters, transmission: value })}>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Automatic">Automatic</SelectItem>
            <SelectItem value="Manual">Manual</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};

export default CarFilters;
