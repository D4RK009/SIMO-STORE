import ProductCard from '../ProductCard';
import freeFireImage from '@assets/generated_images/Free_Fire_game_logo_ed1aeaa4.png';

export default function ProductCardExample() {
  return (
    <div className="w-80">
      <ProductCard
        image={freeFireImage}
        title="FREE FIRE | CODM | PUBG"
        pricing={[
          { duration: "1 Day", price: "$4" },
          { duration: "7 Days", price: "$15" },
          { duration: "31 Days", price: "$23" }
        ]}
      />
    </div>
  );
}