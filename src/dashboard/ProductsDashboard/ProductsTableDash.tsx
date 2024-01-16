import { Checkbox, Table } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";
import { ProductDash } from "./useProductData";

export default function ProductsTableDash(props: any) {
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
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="p-4">
          <Checkbox />
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {props.name}
        </Table.Cell>
        <Table.Cell>{props.description}</Table.Cell>
        <Table.Cell>{String(props.price)}</Table.Cell>
        <Table.Cell>
          <HiOutlineTrash
            className="b-50 text-cyan-600 hover:underline dark:text-cyan-500 hover:cursor-pointer	hover:bg-white rounded"
            onClick={() => deleteProduct(props.id)}
          />
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <Table hoverable className="rounded-none">
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {props.loading && <h1>Loading</h1>}
          {props.error && <h1>We have some problems</h1>}
          {!props.loading &&
            !props.error &&
            props.ProductData.map((el: any, index: any) => (
              <TableRow {...el} key={index} />
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}
