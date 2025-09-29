export default function Footer() {
  return (
    <footer className="border-t bg-background mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground" data-testid="footer-brand">
              SIMO STORE
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="footer-description">
              Your trusted source for game keys and iOS certificates.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground" data-testid="footer-links-title">
              Quick Links
            </h4>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-products">
                Products
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-payments">
                Payment Methods
              </div>
              <div className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-contact">
                Contact Us
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground" data-testid="footer-contact-title">
              Contact Info
            </h4>
            <div className="space-y-2">
              <div className="text-sm" data-testid="footer-telegram">
                <span className="text-muted-foreground">Telegram: </span>
                <span className="text-foreground">@simo_clean00</span>
              </div>
              <div className="text-sm" data-testid="footer-paypal">
                <span className="text-muted-foreground">PayPal: </span>
                <span className="text-foreground">mohamedrp777@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2024 SIMO STORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}