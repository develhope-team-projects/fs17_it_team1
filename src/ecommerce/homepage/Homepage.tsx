import ProductCardHome from "../../shared/ProductCardHome";
import CarrouselProducts from "../product/CarrouselProducts";
import { ProductCard } from "../../shared/ProductCard";

export default function Homepage() {
  return (
    <div>
      <ProductCardHome />

      <CarrouselProducts />
      <ProductCard />
    </div>
  );
}
