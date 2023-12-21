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
      <div className="vuoto h-40"></div>
      <div className="filters">
      <div className="flex items-center justify-right p-4">
  <button id="dropdownDefault" data-dropdown-toggle="dropdown"
    className="text-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-yellow-500"
    type="button">
    Filter by category
    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  <div id="dropdown" className="z-10 hidden w-56 p-3 bg-600 rounded-lg shadow dark:bg-gray-700">
    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
      Category
    </h6>
    <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
      <li className="flex items-center">
        <input id="apple" type="checkbox" value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Whisky (56)
        </label>
      </li>

      <li className="flex items-center">
        <input id="fitbit" type="checkbox" value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Vodka (56)
        </label>
      </li>

      <li className="flex items-center">
        <input id="dell" type="checkbox" value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Bjorn (56)
        </label>
      </li>
    </ul>
  </div>
</div>
      </div>
    <div className="cards mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 ml-4 mr-4 mt-11">
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


