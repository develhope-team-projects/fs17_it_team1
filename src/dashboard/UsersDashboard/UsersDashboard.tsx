import { NormalButton } from "../../shared/NormalButton";

import { HiOutlineRefresh, HiPlus } from "react-icons/hi";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import UsersTableDash from "./UsersTableDash";
import useUserData from "./useUserData";
import { func } from "prop-types";
import { Form } from "../Form/Form";
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

export default function UsersDashboard() {
  const [formVisibility, setFormVisibility] = useState(false);

  const { userData, setUserData, loading, error, onFetchData } = useUserData();

  const props = { userData, setUserData, loading, error, onFetchData };

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  // Function to Open the form
  function formHandler() {
    setFormVisibility(!formVisibility);
    console.log(`Form visibility: ${formVisibility}`);
  }

  return (
    <div className="w-full bg-our-black">
      <h1 className="flex items-center text-5xl font-bold dark:text-white">
        Inbox
      </h1>
      <div className="flex flex-col	justify-between h-[90%] ">
        <div>
          <div className="flex justify-between px-1 py-1">
            <NormalButton svg={<HiOutlineRefresh />} function={onFetchData} />
            <NormalButton
              content="New"
              svg={<HiPlus />}
              function={() => formHandler()}
            />
          </div>
          {formVisibility && <Form />}
          <UsersTableDash {...props} />
        </div>
        <div className="flex overflow-x-auto sm:justify-center ">
          <Pagination
            layout="navigation"
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </div>
  );
}
