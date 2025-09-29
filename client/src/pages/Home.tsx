import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import PaymentMethods from "@/components/PaymentMethods";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";

// Product images
import freeFireImage from '@assets/file_00000000403461f58001360c16d5af01_1759101583894.png';
import mobileLegendsImage from '@assets/generated_images/Mobile_Legends_game_logo_f55b95cd.png';
import eightBallImage from '@assets/generated_images/8_Ball_Pool_game_logo_9e0330d9.png';
import iOSCertImage from '@assets/file_00000000ccb06230b2ac2b9efc32b0ec_1759102797522.png';

const products = [
  {
    image: freeFireImage,
    title: "FREE FIRE | CODM | PUBG",
    pricing: [
      { duration: "1 Day", price: "$4" },
      { duration: "7 Days", price: "$15" },
      { duration: "31 Days", price: "$23" }
    ]
  },
  {
    image: mobileLegendsImage,
    title: "Mobile Legends",
    pricing: [
      { duration: "1 Day", price: "$4" },
      { duration: "7 Days", price: "$14" },
      { duration: "31 Days", price: "$20" }
    ]
  },
  {
    image: eightBallImage,
    title: "8 Ball Pool",
    pricing: [
      { duration: "1 Day", price: "$5" },
      { duration: "7 Days", price: "$15" },
      { duration: "31 Days", price: "$26" }
    ]
  },
  {
    image: iOSCertImage,
    title: "iOS Certificate – 1 Year",
    pricing: [
      { duration: "Delivery in 10s", price: "$18" },
      { duration: "Delivery in 3 days", price: "$10" }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundEffect />
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-wider drop-shadow-2xl" data-testid="text-main-title">
            <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
              SIMO STORE
            </span>
          </h1>
          
          <div className="relative">
            <p className="text-xl md:text-2xl font-bold text-white mb-3 max-w-3xl mx-auto drop-shadow-lg" data-testid="text-subtitle">
              <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                🎮 Best & Cheapest Game Keys 🎮
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-2xl mx-auto font-medium">
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Android • iOS • PC
              </span>
            </p>
          </div>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl rounded-full"></div>
            <p className="relative text-lg md:text-xl text-white font-semibold px-6 py-3 bg-black/40 backdrop-blur-sm rounded-full border border-primary/30 shadow-2xl" data-testid="text-description">
              ⚡ <span className="text-yellow-400">Fast iOS Signing Certificates</span> ⚡
            </p>
          </div>
          
          <div className="mt-6 flex justify-center space-x-2">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></span>
            <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></span>
          </div>
        </div>
        
        {/* Products Section */}
        <section id="products" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-white" data-testid="text-products-title">
              Available Products
            </h2>
            <p className="text-gray-300">
              Choose from our premium gaming services
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                pricing={product.pricing}
              />
            ))}
          </div>
        </section>

        {/* Payment Methods Section */}
        <section id="payments" className="mb-16">
          <PaymentMethods />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-8">
          <ContactSection />
        </section>
      </div>
      
      <Footer />
    </div>
  );
}