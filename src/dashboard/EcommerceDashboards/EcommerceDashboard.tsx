import { NormalButton } from "../../shared/NormalButton";
import { HiOutlineRefresh, HiPlus } from "react-icons/hi";
import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  EcommerceDashboardTable,
  ProductTemplate,
} from "./EcommerceDashboardTable";

const products: ProductTemplate = {
  name: "Pampero",
  quantity: 1,
  status: true,
  title: "Quantity",
};
const sales: ProductTemplate = {
  name: "Pampero",
  quantity: 2,
  status: true,
  title: "Sold units",
};
const refunds: ProductTemplate = {
  name: "Pampero",
  quantity: 3,
  status: true,
  title: "Refunds",
};
const shipping: ProductTemplate = {
  name: "Pampero",
  quantity: 4,
  status: true,
  title: "Shipped units",
};

export function EcommerceDashboard({
  pageName = "products",
}: {
  pageName?: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(pageName);

  useEffect(() => {
    setCurrentTab(pageName);
  }, [pageName]);
  const onPageChange = (page: number) => setCurrentPage(page);

  const renderTableContent = () => {
    switch (currentTab) {
      case "Products":
        return <EcommerceDashboardTable {...products} />;
        break;
      case "Sales":
        return <EcommerceDashboardTable {...sales} />;
        break;
      case "Refunds":
        return <EcommerceDashboardTable {...refunds} />;
        break;
      case "Shipping":
        return <EcommerceDashboardTable {...shipping} />;
        break;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-our-black">
      <h1 className="flex items-center text-5xl font-bold dark:text-white">
        {currentTab === "products" ? "Products" : currentTab}
      </h1>
      <div className="flex flex-col	justify-between h-[90%] ">
        <div>
          <div className="flex justify-between px-1 py-1">
            <NormalButton svg={<HiOutlineRefresh />} />
            <NormalButton content="New" svg={<HiPlus />} />
          </div>
          {renderTableContent()}
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
