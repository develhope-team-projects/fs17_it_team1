import { Checkbox, Table } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";

export type ProductTemplate = {
  name: string;
  quantity: number;
  status: boolean;
  title: string;
  sales?: number;
  refunds?: number;
  shipped?: number;
};

export function EcommerceDashboardTable(props: ProductTemplate) {
  return (
    <div className="overflow-x-auto w-full">
      <Table hoverable className="rounded-none">
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>{props.title}</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
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
              {props.name}
            </Table.Cell>
            <Table.Cell>{props.quantity}</Table.Cell>
            <Table.Cell>
              {props.status === true ? "Active" : "Draft"}
            </Table.Cell>
            <Table.Cell>
              <HiOutlineTrash className="b-50 text-cyan-600 hover:underline dark:text-cyan-500 hover:cursor-pointer	hover:bg-white rounded" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
