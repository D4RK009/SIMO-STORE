import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Wallet, Smartphone, Building, Gift, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentMethod {
  name: string;
  details: string;
  icon: React.ReactNode;
}

const paymentMethods: PaymentMethod[] = [
  {
    name: "PayPal",
    details: "mohamedrp777@gmail.com",
    icon: <CreditCard className="w-5 h-5" />
  },
  {
    name: "Binance",
    details: "1158262821",
    icon: <Wallet className="w-5 h-5" />
  },
  {
    name: "Cash Plus",
    details: "0697904604",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    name: "BANK RIB",
    details: "835780030017581421796253",
    icon: <Building className="w-5 h-5" />
  },
  {
    name: "Orange Card",
    details: "min 200 DH",
    icon: <Banknote className="w-5 h-5" />
  },
  {
    name: "Gift Card Binance",
    details: "Accepted",
    icon: <Gift className="w-5 h-5" />
  }
];

export default function PaymentMethods() {
  const handleTelegramClick = () => {
    window.open('https://t.me/simo_clean00', '_blank');
    console.log('Telegram proof link clicked');
  };

  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-white" data-testid="text-payment-title">
          Payment Methods
        </h2>
        <p className="text-gray-300">Choose your preferred payment method</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {paymentMethods.map((method, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-4 p-4 rounded-lg border bg-card hover-elevate"
            data-testid={`payment-method-${index}`}
          >
            <div className="text-primary">
              {method.icon}
            </div>
            <div className="flex-1">
              <div className="font-semibold" data-testid={`text-payment-name-${index}`}>
                {method.name}
              </div>
              <div className="text-sm text-muted-foreground break-all" data-testid={`text-payment-details-${index}`}>
                {method.details}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          onClick={handleTelegramClick}
          className="bg-primary hover:bg-primary/90"
          data-testid="button-send-proof"
        >
          📩 Send Proof to Telegram
        </Button>
      </div>
    </section>
  );
}