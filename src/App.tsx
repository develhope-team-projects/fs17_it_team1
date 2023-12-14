import RatingReview, { Review } from "./product/RatingReview";
import Header from "./shared/Header";

import FooterComponent, { FooterType } from "./shared/Footer";

import { Post, ProductCard } from "./shared/ProductCard";

import { ButtonElements, NormalButton } from "./shared/NormalButton";
import { SpecialButton, SpecialButtonElements } from "./shared/SpecialButton";
import { BannerContent, DefaultBanner } from "./product/DefaultBanner";

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

const prova: SpecialButtonElements = {
  content: "Special",
};

const prova2: ButtonElements = {
  content: "prova",
};
const BannerContentTest: BannerContent = {
  announcement: "Ciao",
  link: "Non cliccare",
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
};

function App() {
  return (
    <div className="dark">
      <Header />

      <ProductCard {...test2} />

      <RatingReview {...test} />

      <FooterComponent {...footerTest} />

      <SpecialButton {...prova} />
      <NormalButton {...prova2} />
      <DefaultBanner {...BannerContentTest} />
    </div>
  );
}

export default App;
