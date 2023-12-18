import { Checkbox, Table } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";

export type UserDash = {
  username: string;
  email: string;
  date: string;
};

export default function UsersTableDash(props: UserDash) {
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {props.username}
            </Table.Cell>
            <Table.Cell>{props.email}</Table.Cell>
            <Table.Cell>{props.date}</Table.Cell>
            <Table.Cell>
              <HiOutlineTrash className="b-50 text-cyan-600 hover:underline dark:text-cyan-500 hover:cursor-pointer	hover:bg-white rounded" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
