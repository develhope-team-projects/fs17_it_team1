import CardStd from "../product/CardStd";
import Header from "../shared/Header";
import FooterComponent from "../shared/Footer";
import { useState } from "react";

const text = {
  title: "Jack Daniel's Tennessee Whiskey Old N. 7 Brand 1Litro",
  rating: 4,
  img: "",
  price: 34.99
}

const text2 = {
  title: "Bulleit Bourbon Frontier Whiskey 70cl",
  rating: 5,
  img: "",
  price:
   14.99
}
const text3 = {
  title: "Jim Beam Bourbon White Label 1Litro",
  rating: 43,
  img: "",
  price: 15.99
}

const text4 = {
  title: "Whisky Akashi Red 50cl",
  rating: 5,
  img: "",
  price: 24.99
}

const text5 = {
  title: "1974 Barolo DOCG - Guasti",
  rating: 5,
  img: "",
  price: 59.99
}

const text6 = {
  title: "2010 Brunello di Montalcino DOCG - Piombaia",
  rating: 2,
  img: "",
  price: 49.99
}

const text7 = {
  title: "Merlot Marca Trevigiana IGP - Baron Winery",
  rating: 3,
  img: "",
  price: 29.99
}

const text8 = {
  title: "1996 Tegolaia - Vila Travignoli",
  rating: 1,
  img: "",
  price: 84.99
}

const text9 = {
  title: "Vodka Nikka Coffey - Nikka [0.70 Lt, Astucciato]",
  rating: 5,
  img: "",
  price: 249.99
}

const text10 = {
  title: "Vodka Beluga Celebration - Mariinsk Distillery [0.70 Lt]",
  rating: 4,
  img: "",
  price: 44.99
}

const text11 = {
  title: "Vodka Beluga Allure Pelle - Beluga [0.70 Lt]",
  rating: 4,
  img: "",
  price: 149.99
}

const text12 = {
  title: "Vodka Eiko [0.70 Lt]",
  rating: 3,
  img: "",
  price: 99.99
}

const Store = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

   return(
    <div>
      <div className="header">
            <Header/>
      </div>

      <div className="vuoto
      h-40">
      </div>

      <div className="container
       mx-4
       max-w-7xl"
       >

      <button
        onClick={toggleFilter}
        className="
        bg-yellow-500
        hover:bg-orange-50
        text-white
        hover:text-black
        hover:border-2
        border-yellow-500
        font-bold
        py-2
        px-4
        rounded"
      >
        Filtra
      </button>


{isFilterOpen && (
  <div className="
      bg-white
      shadow-md
      mt-2
      p-4
      rounded-2xl
      shadow-2xl ">
  <label className="
      block
      text-gray-700
      text-sm
      font-bold
      mb-2 " >
        Prezzo:
    <select className="
        form-select
        mt-1
        block
        w-full
        rounded-l-lg">
          <option> 14.99</option>
          <option>24.99</option>
          <option>39.99</option>
          <option>59.99</option>
     </select>
  </label>


    <label className="
    block
    text-gray-700
    text-sm
    font-bold
    mb-2 ">
    Categorie:
      <select className="
      form-select
      mt-1
      block
      w-full
      rounded-l-lg">
        <option>Vini</option>
        <option>Liquori</option>
        <option>Spumanti</option>
        <option>Distillati</option>
      </select>
    </label>

         
     <button className="
    bg-yellow-500
    hover:bg-orange-50
    text-white
    hover:text-black
    hover:border-2
    border-yellow-500
    text-white
    font-bold
    py-2
    px-4
    rounded
    mt-4">
    Applica Filtri
    </button>
  </div>
 )}
</div>


    <div className="cards
         grid grid-cols-1
         sm:grid-cols-2
         md:grid-cols-3
         lg:grid-cols-4
         gap-3
         ml-4
         mr-4
         mt-11
         max-w-screen-xl
         mb-3
         ">

    <CardStd {...text}/>
    <CardStd {...text2}/>
    <CardStd {...text3}/>
    <CardStd {...text4}/>
    <CardStd {...text5}/>
    <CardStd {...text6}/>
    <CardStd {...text7}/>
    <CardStd {...text8}/>
    <CardStd {...text9}/>
    <CardStd {...text10}/>
    <CardStd {...text11}/>
    <CardStd {...text12}/>
    </div>

    <div className="footer">
      <FooterComponent
      logo={""}
      firstFooterTitle={""}
      secondFooterTitle={""}
      thirdFooterTitle={""}
      firstColumnElement1={""}
      firstColumnElement2={""}
      firstColumnElement3={""}
      secondColumnElement1={""}
      secondColumnElement2={""}
      secondColumnElement3={""}
      secondColumnElement4={""}
      secondColumnElement5={""}
      thirdColumnElement1={""}
      thirdColumnElement2={""}
      thirdColumnElement3={""}
      thirdColumnElement4={""}
      thirdColumnElement5={""}/>
    </div>
  </div>

 );
}
 export default Store
