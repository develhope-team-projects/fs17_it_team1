import { NormalButton } from "../shared/NormalButton";
import InboxTable, { MsgPrv } from "./InboxTable";
import { HiOutlineRefresh, HiPlus } from "react-icons/hi";
import { Pagination } from "flowbite-react";
import { useState } from "react";

const test: MsgPrv = {
  username: "Eno-Mario",
  title: "Aiuto!",
  content: "chiedo supporto immediato",
  date: "01-Gen-2023",
};

export default function Inbox() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="w-full bg-our-black">
      <h1 className="flex items-center text-5xl font-bold dark:text-white">
        Inbox
      </h1>
      <div className="flex flex-col	justify-between h-[90%] ">
        <div>
          <div className="flex justify-between px-1 py-1">
            <NormalButton svg={<HiOutlineRefresh />} />
            <NormalButton content="New" svg={<HiPlus />} />
          </div>
          <InboxTable {...test} />
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
