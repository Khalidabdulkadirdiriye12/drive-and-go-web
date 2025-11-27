import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CostBreakdownProps {
  basePrice: number;
  shippingEstimate: number;
  dutyEstimate: number;
  clearingEstimate: number;
}

const CostBreakdown = ({ basePrice, shippingEstimate, dutyEstimate, clearingEstimate }: CostBreakdownProps) => {
  const finalPrice = basePrice + shippingEstimate + dutyEstimate + clearingEstimate;

  const formatPrice = (price: number) => `KES ${price.toLocaleString()}`;

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-foreground mb-6">Estimated Landed Cost</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Base Price</span>
          <span className="font-semibold text-foreground">{formatPrice(basePrice)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Shipping Estimate</span>
          <span className="font-semibold text-foreground">{formatPrice(shippingEstimate)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Import Duty Estimate</span>
          <span className="font-semibold text-foreground">{formatPrice(dutyEstimate)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Clearing Estimate</span>
          <span className="font-semibold text-foreground">{formatPrice(clearingEstimate)}</span>
        </div>
        
        <Separator className="my-4" />
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-foreground">Final Estimated Price</span>
          <span className="text-2xl font-bold text-primary">{formatPrice(finalPrice)}</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> These are estimated costs. Final prices may vary based on actual shipping costs, current duty rates, and clearing charges at the time of importation.
        </p>
      </div>
    </Card>
  );
};

export default CostBreakdown;
