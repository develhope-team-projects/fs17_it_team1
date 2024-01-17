import CardStd from "../product/CardStd";
import Header from "../../shared/Header";
import FooterComponent from "../../shared/Footer";
import { useState } from "react";
import useProductData from "../../dashboard/Product/useProductData";
import { Pagination } from "flowbite-react";
import ProductCardHome from "../../shared/ProductCardHome";

const Store = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const onPageChange = (page: number) => setCurrentPage(page);

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const { productData, setProductData, loading, error, onFetchData } =
    useProductData();

  return (
    <div>
      <div
        className="vuoto
      h-30">
      <ProductCardHome/>
      </div>

      <div className="flex flex-col w-full items-center">
        <div
          className="container
       mx-4
       max-w-7xl
       mt-2
       mb-0"
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
            <div
              className="
      bg-white
      shadow-md
      mt-2
      p-4
      rounded-2xl
      shadow-2xl "
            >
              <label
                className="
      block
      text-gray-700
      text-sm
      font-bold
      mb-2 "
              >
                Prezzo:
                <select
                  className="
        form-select
        mt-1
        block
        w-full
        rounded-l-lg"
                >
                  <option> 14.99</option>
                  <option>24.99</option>
                  <option>39.99</option>
                  <option>59.99</option>
                </select>
              </label>

              <label
                className="
    block
    text-gray-700
    text-sm
    font-bold
    mb-2 "
              >
                Categorie:
                <select
                  className="
      form-select
      mt-1
      block
      w-full
      rounded-l-lg"
                >
                  <option>Vini</option>
                  <option>Liquori</option>
                  <option>Spumanti</option>
                  <option>Distillati</option>
                </select>
              </label>

              <button
                className="
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
    mt-4"
              >
                Applica Filtri
              </button>
            </div>
          )}
        </div>

        <div
          className="cards
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
         "
        >
          {loading && (
            <div className="flex items-center justify-center flex-col w-full mt-0">
              <img src="https://media.tenor.com/vfSWqzGjMdcAAAAi/grants-triple-good.gif" />
              <p className="text-4xl p-4">Loading...</p>
            </div>
          )}
          {error && <h1>We have some problems</h1>}
          {!loading &&
            !error &&
            productData
              .slice(startIndex, endIndex)
              .map((el: any, index: any) => <CardStd key={index} {...el} />)}
        </div>
      </div>

      <div className="flex flex-col w-full items-center mb-2 ">
        <Pagination
          layout="navigation"
          currentPage={currentPage}
          totalPages={Math.ceil(productData.length / itemsPerPage)}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};
export default Store;
