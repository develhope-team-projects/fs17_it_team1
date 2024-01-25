import { Checkbox, Pagination, Table } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";

import { useContext, useState } from "react";
import { pgTheme } from "../../ecommerce/store/Store";
import { tabTheme } from "../ProductsDashboard/ProductsTableDash";
import { salesDash } from "./useSalesData";
import { userContext } from "../../loginESubscription/AuthContext";

export default function SalesTableDash(props: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const contesto = useContext(userContext);

  const onPageChange = (page: number) => setCurrentPage(page);

  const deleteUser = async (id: number) => {
    const userToDelete = { id: id };
    const response = await fetch("http://localhost:3001/orders", {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(userToDelete), // body data type must match "Content-Type" header
    });

    props.setSalesData((d: any) => d.filter((del: any) => del.id !== id));

    return response.json(); // parses JSON response into native JavaScript objects
  };

  function TableRow(props: salesDash) {
    return (
      <Table.Row className="bg-white dark:border-[#c8a485]/40 dark:bg-[#c8a485]/70 dark:hover:bg-[#c8a485]/90">
        <Table.Cell className="p-4">
          <Checkbox />
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {props.id}
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {props.user_id}
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {String(props.creation_date)}
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {props.total_am}
        </Table.Cell>
        <Table.Cell>
          <HiOutlineTrash
            className="b-50 text-cyan-600 hover:underline dark:text-cyan-1000 hover:cursor-pointer	hover:bg-white rounded"
            onClick={() => deleteUser(Number(props.id))}
          />
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <Table hoverable className="rounded-none">
        <Table.Head>
          <Table.HeadCell className="p-4" theme={tabTheme.head.cell}>
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell theme={tabTheme.head.cell}>ID</Table.HeadCell>
          <Table.HeadCell theme={tabTheme.head.cell}>UserID</Table.HeadCell>
          <Table.HeadCell theme={tabTheme.head.cell}>Date</Table.HeadCell>
          <Table.HeadCell theme={tabTheme.head.cell}>
            Total Ammount
          </Table.HeadCell>
          <Table.HeadCell theme={tabTheme.head.cell}>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {props.loading && <h1>Loading</h1>}
          {props.error && <h1>We have some problems</h1>}
          {!props.loading &&
            !props.error &&
            contesto === 18 &&
            props.salesData
              .slice(startIndex, endIndex)
              .map((el: any, index: any) => <TableRow {...el} key={index} />)}
          {!props.loading &&
            !props.error &&
            contesto !== 18 &&
            props.salesData
              .filter((e: salesDash) => e.user_id === contesto)
              .slice(startIndex, endIndex)
              .map((el: any, index: any) => <TableRow {...el} key={index} />)}
        </Table.Body>
      </Table>
      <div className="flex flex-col w-full items-center mb-2 ">
        <Pagination
          theme={pgTheme}
          layout="navigation"
          currentPage={currentPage}
          totalPages={Math.ceil(props.salesData.length / itemsPerPage)}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}
