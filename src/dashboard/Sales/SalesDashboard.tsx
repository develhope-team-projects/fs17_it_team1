import { NormalButton } from "../../shared/NormalButton";

import { HiOutlineRefresh, HiPlus } from "react-icons/hi";
import { Pagination } from "flowbite-react";
import { useState } from "react";

import { func } from "prop-types";
import { Form } from "../Form/Form";
import useSalesData from "./useSalesData";
import SalesTableDash from "./SalesTableDash";
const testuData = {
  name: "Product 6",
  description: "Test Product",
  price: 20.0,
  discount: null,
};

//function to create User
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

export default function SalesDashboard() {
  const [formVisibility, setFormVisibility] = useState(false);

  const { salesData, setSalesData, loading, error, onFetchData } =
    useSalesData();

  const props = { salesData, setSalesData, loading, error, onFetchData };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const onPageChange = (page: number) => setCurrentPage(page);

  // Function to Open the form
  function formHandler() {
    setFormVisibility(!formVisibility);
    console.log(`Form visibility: ${formVisibility}`);
  }

  return (
    <div className="w-full">
      <h1 className="flex items-center text-5xl font-bold dark:text-white my-3 mx-2">
        Sales
      </h1>
      <div className="flex flex-col	justify-between h-[90%] ">
        <div>
          <div className="flex justify-between px-1 py-1">
            <NormalButton svg={<HiOutlineRefresh />} function={onFetchData} />
          </div>
          {formVisibility && <Form />}
          {!formVisibility && <SalesTableDash {...props} />}
        </div>
      </div>
    </div>
  );
}
