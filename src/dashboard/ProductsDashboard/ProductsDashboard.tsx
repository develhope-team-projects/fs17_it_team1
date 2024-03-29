import { NormalButton } from "../../shared/NormalButton";

import { HiOutlineRefresh, HiPlus } from "react-icons/hi";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import ProductsTableDash from "./ProductsTableDash";
import useProductData from "./useProductData";
import { func } from "prop-types";
import { Form } from "../Form/Form";
import { ProductForm } from "../ProductForm/ProductForm";
const testuData = {
  name: "Product 6",
  description: "Test Product",
  price: 20.0,
  discount: null,
};

//function to create Product
const fetchPost = async (uData: any) => {
  console.log(uData);
  const response = await fetch("http://localhost:3001/products", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(uData), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

export default function ProductsDashboard() {
  const [formVisibility, setFormVisibility] = useState(false);

  const { ProductData, setProductData, loading, error, onFetchData } =
    useProductData();

  const props = { ProductData, setProductData, loading, error, onFetchData };

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  // Function to Open the form
  function formHandler() {
    setFormVisibility(!formVisibility);
    console.log(`Form visibility: ${formVisibility}`);
  }

  return (
    <div className="w-full ">
      <h1 className="flex items-center text-5xl font-bold dark:text-white my-3 mx-2">
        Products
      </h1>
      <div className="flex flex-col	justify-between h-[90%] ">
        <div>
          <div className="flex justify-between px-1 py-1">
            <NormalButton svg={<HiOutlineRefresh />} onClick={onFetchData} />
            <NormalButton
              content="New"
              svg={<HiPlus />}
              onClick={() => formHandler()}
            />
          </div>
          {formVisibility && <ProductForm />}
          {!formVisibility && <ProductsTableDash {...props} />}
        </div>
        {/*         <div className="flex overflow-x-auto sm:justify-center ">
          <Pagination
            layout="navigation"
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
            showIcons
          />
        </div> */}
      </div>
    </div>
  );
}
