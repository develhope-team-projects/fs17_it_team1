import { Checkbox, Pagination, Table } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";
import { ProductDash } from "./useProductData";
import { useState } from "react";
import { pgTheme } from "../../ecommerce/store/Store";

export const tabTheme: any = {
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    shadow:
      "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
    wrapper: "relative",
  },
  body: {
    base: "group/body",
    cell: {
      base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4",
    },
  },
  head: {
    base: "group/head text-xs uppercase text-gray-700 dark:text-our-black",
    cell: {
      base: "bg-gray-50 dark:bg-[#c8a485]/90 px-6 py-3 dark:text-our-black",
    },
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped:
      "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-white",
  },
};

export default function ProductsTableDash(props: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const onPageChange = (page: number) => setCurrentPage(page);

  const deleteProduct = async (id: number) => {
    const ProductToDelete = { id: id };
    const response = await fetch("http://localhost:3001/products", {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(ProductToDelete), // body data type must match "Content-Type" header
    });

    props.setProductData((d: any) => d.filter((del: any) => del.id !== id));

    return response.json(); // parses JSON response into native JavaScript objects
  };

  function TableRow(props: ProductDash) {
    return (
      <Table.Row className="bg-white dark:border-[#c8a485]/40 dark:bg-[#c8a485]/70 dark:hover:bg-[#c8a485]/90">
        <Table.Cell className="p-4">
          <Checkbox />
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {props.name}
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {props.description}
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {String(props.price)}
        </Table.Cell>
        <Table.Cell>
          <HiOutlineTrash
            className="b-50 text-cyan-600 hover:underline dark:text-cyan-500 hover:cursor-pointer	hover:bg-white rounded"
            onClick={() => deleteProduct(Number(props.id))}
          />
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <Table hoverable theme={tabTheme}>
        <Table.Head theme={tabTheme.head}>
          <Table.HeadCell className="p-4" theme={tabTheme.head.cell}>
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell theme={tabTheme.head.cell}>
            Product name
          </Table.HeadCell>
          <Table.HeadCell theme={tabTheme.head.cell}>
            Description
          </Table.HeadCell>
          <Table.HeadCell theme={tabTheme.head.cell}>Price</Table.HeadCell>
          <Table.HeadCell theme={tabTheme.head.cell}>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {props.loading && <h1>Loading</h1>}
          {props.error && <h1>We have some problems</h1>}
          {!props.loading &&
            !props.error &&
            props.ProductData.slice(startIndex, endIndex).map(
              (el: any, index: any) => <TableRow {...el} key={index} />
            )}
        </Table.Body>
      </Table>
      <div className="flex flex-col w-full items-center mb-2 ">
        <Pagination
          theme={pgTheme}
          layout="navigation"
          currentPage={currentPage}
          totalPages={Math.ceil(props.ProductData.length / itemsPerPage)}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}
