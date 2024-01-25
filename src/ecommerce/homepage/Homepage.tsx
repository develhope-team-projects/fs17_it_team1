import ProductCardHome from "../../shared/ProductCardHome";
import CarrouselProducts from "../product/CarrouselProducts";
import { ProductCard } from "../../shared/ProductCard";
import  Contact  from "../Contact/Contact";
export default function Homepage() {
  return (
    <div>
      <ProductCardHome />

      <CarrouselProducts />
      <ProductCard />
      <Contact/>
    </div>
  );
}
