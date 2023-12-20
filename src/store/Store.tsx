import CardStd from "../product/CardStd";
import Header from "../shared/Header";
const text = {
  title: "Prodotto",
  rating: 4,
  img: "",
  price: 34.99

}
export function Store (){ 
   return(
    <div>
      <div className="header">
            <Header/>
      </div>
      <div className="vuoto h-10"></div>
    <div className="cards mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-4 mr-4 mt-11">
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    <CardStd {...text}/>
    </div>
    </div>
  )
}


