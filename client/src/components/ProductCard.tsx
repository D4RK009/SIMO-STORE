import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingTier {
  duration: string;
  price: string;
}

interface ProductCardProps {
  image: string;
  title: string;
  pricing: PricingTier[];
}

export default function ProductCard({ image, title, pricing }: ProductCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300" data-testid={`card-product-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="p-0">
        <div className="aspect-[18/9] overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            data-testid={`img-product-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-3" data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <div className="space-y-3">
          {pricing.map((tier, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-muted-foreground" data-testid={`text-duration-${index}`}>
                {tier.duration}:
              </span>
              <Badge variant="secondary" className="text-chart-2 font-semibold" data-testid={`text-price-${index}`}>
                {tier.price}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}