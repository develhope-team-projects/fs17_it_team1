import RatingReview, { Review } from "./product/RatingReview";

const test: Review = {
  img: "https://cdn-7.motorsport.com/images/amp/0ZRabeN0/s1000/carlos-sainz-ferrari-charles-l.jpg",
  name: "Eno Mario",
  userCountry: "Italy",
  rating: 4,
  ratingTitle: "buono",
  commentDate: "01-01-2023",
  comment: "Buon Prodotto",
};

function App() {
  return (
    <div className="dark">
      <RatingReview {...test} />
    </div>

  );
}

export default App;
