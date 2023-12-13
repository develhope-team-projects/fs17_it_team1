import RatingReview, { Review } from "./product/RatingReview";
import { ButtonElements, NormalButton } from "./shared/NormalButton";
import { SpecialButton, SpecialButtonElements } from "./shared/SpecialButton";

const test: Review = {
  img: "https://cdn-7.motorsport.com/images/amp/0ZRabeN0/s1000/carlos-sainz-ferrari-charles-l.jpg",
  name: "Eno Mario",
  userCountry: "Italy",
  rating: 4,
  ratingTitle: "buono",
  commentDate: "01-01-2023",
  comment: "Buon Prodotto",
};

const prova: SpecialButtonElements = {
  content: "Special",

}

const prova2: ButtonElements = {
  content: "prova",
}

function App() {
  return (
    <div className="dark">
      <RatingReview {...test} />
      <SpecialButton {...prova}/>
      <NormalButton {...prova2}/>
    </div>

  );
}

export default App;
