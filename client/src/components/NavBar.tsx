import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(`Navigated to ${sectionId} section`);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log('Mobile menu toggled');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary" data-testid="nav-logo">
              SIMO STORE
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('products')}
              data-testid="nav-products"
            >
              Products
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('payments')}
              data-testid="nav-payments"
            >
              Payments
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              data-testid="nav-contact"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              data-testid="nav-mobile-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-800">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => scrollToSection('products')}
                data-testid="nav-mobile-products"
              >
                Products
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => scrollToSection('payments')}
                data-testid="nav-mobile-payments"
              >
                Payments
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => scrollToSection('contact')}
                data-testid="nav-mobile-contact"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}