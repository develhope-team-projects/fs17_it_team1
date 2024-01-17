import { Checkbox, Pagination, Table } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";
import { UserDash } from "./useUserData";
import { useState } from "react";
import { pgTheme } from "../../ecommerce/store/Store";

export default function UsersTableDash(props: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const onPageChange = (page: number) => setCurrentPage(page);

  const deleteUser = async (id: number) => {
    const userToDelete = { id: id };
    const response = await fetch("http://localhost:3001/users", {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(userToDelete), // body data type must match "Content-Type" header
    });

    props.setUserData((d: any) => d.filter((del: any) => del.id !== id));

    return response.json(); // parses JSON response into native JavaScript objects
  };

  function TableRow(props: UserDash) {
    return (
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="p-4">
          <Checkbox />
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {props.first_name}
        </Table.Cell>
        <Table.Cell>{props.email}</Table.Cell>
        <Table.Cell>{String(props.creation_date)}</Table.Cell>
        <Table.Cell>
          <HiOutlineTrash
            className="b-50 text-cyan-600 hover:underline dark:text-cyan-500 hover:cursor-pointer	hover:bg-white rounded"
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
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {props.loading && <h1>Loading</h1>}
          {props.error && <h1>We have some problems</h1>}
          {!props.loading &&
            !props.error &&
            props.userData
              .slice(startIndex, endIndex)
              .map((el: any, index: any) => <TableRow {...el} key={index} />)}
        </Table.Body>
      </Table>
      <div className="flex flex-col w-full items-center mb-2 ">
        <Pagination
          theme={pgTheme}
          layout="navigation"
          currentPage={currentPage}
          totalPages={Math.ceil(props.userData.length / itemsPerPage)}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}
