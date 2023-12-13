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
const test2: Post = {
  img: "https://cdn-7.motorsport.com/images/amp/0ZRabeN0/s1000/carlos-sainz-ferrari-charles-l.jpg",
  title: "E Finibus Bonorum et Malorum",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

function App() {
  return (
    <div className="dark">
      <ProductCard {...test2} />
      <RatingReview {...test} />
    </div>

  );
}

export default App;
