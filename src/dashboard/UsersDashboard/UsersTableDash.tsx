import { Checkbox, Table } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";
import useUserData, { UserDash } from "./useUserData";

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
        <HiOutlineTrash className="b-50 text-cyan-600 hover:underline dark:text-cyan-500 hover:cursor-pointer	hover:bg-white rounded" />
      </Table.Cell>
    </Table.Row>
  );
}

export default function UsersTableDash() {
  const { userData, loading, error } = useUserData();

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
          {loading && <h1>Loading</h1>}
          {error && <h1>We have some problems</h1>}
          {!loading &&
            !error &&
            userData.map((el, index) => <TableRow {...el} key={index} />)}
        </Table.Body>
      </Table>
    </div>
  );
}
