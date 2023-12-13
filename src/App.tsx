import RatingReview, { Review } from "./product/RatingReview";
import { Post, ProductCard } from "./shared/ProductCard";


const test: Review = {
  img: "https://cdn-7.motorsport.com/images/amp/0ZRabeN0/s1000/carlos-sainz-ferrari-charles-l.jpg",
  name: "Eno Mario",
  userCountry: "Italy",
  rating: 4,
  ratingTitle: "buono",
  commentDate: "01-01-2023",
  comment: "Buon Prodotto",
};
const test2: Post ={
  img: "https://cdn-7.motorsport.com/images/amp/0ZRabeN0/s1000/carlos-sainz-ferrari-charles-l.jpg",
  title: 'gino è bello',
  description: 'lorem lorem'
}

function App() {
  return (
    <div className="dark">
      <ProductCard {...test2} />
      <RatingReview {...test} />
    </div>

  );
}

export default App;
