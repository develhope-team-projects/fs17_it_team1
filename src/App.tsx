import RatingReview, { Review } from "./product/RatingReview";

import FooterComponent, {FooterType} from "./shared/Footer";

const test: Review = {
  img: "https://cdn-7.motorsport.com/images/amp/0ZRabeN0/s1000/carlos-sainz-ferrari-charles-l.jpg",
  name: "Eno Mario",
  userCountry: "Italy",
  rating: 4,
  ratingTitle: "buono",
  commentDate: "01-01-2023",
  comment: "Buon Prodotto",
};

const footerTest: FooterType = {
  logo: "https://flowbite.com/docs/images/logo.svg",
  firstFooterTitle: "Prodotti",
  secondFooterTitle: "Il nostro team",
  thirdFooterTitle: "Il tuo account",
  firstColumnElement1: "Offerte",
  firstColumnElement2: "Nuovi prodotti",
  firstColumnElement3: "Più venduti",
  secondColumnElement1: "Chi siamo",
  secondColumnElement2: "Dove ci troviamo",
  secondColumnElement3: "Note legali",
  secondColumnElement4: "Contattaci",
  secondColumnElement5: "Negozi",
  thirdColumnElement1: "Ordini",
  thirdColumnElement2: "Note di credito",
  thirdColumnElement3: "Indirizzi",
  thirdColumnElement4: "I miei avvisi",
  thirdColumnElement5: "Informazioni personali",
}

function App(){

  return (
    <div className="dark">
      <RatingReview {...test} />
      <FooterComponent {...footerTest} />
    </div>
  );
  }

export default App;
