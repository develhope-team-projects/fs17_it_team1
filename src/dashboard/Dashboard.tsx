import { Link, Route, Routes } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";
import UsersDashboard from "./UsersDashboard/UsersDashboard";
import { EcommerceDashboard } from "./EcommerceDashboards/EcommerceDashboard";
import Overview from "./Overview/Overview";
import { useContext } from "react";
import { userContext } from "../loginESubscription/AuthContext";
import ProductsDashboard from "./ProductsDashboard/ProductsDashboard";
import SalesDashboard from "./Sales/SalesDashboard";

const themeNav: any = {
  root: {
    base: "h-full",
    collapsed: {
      on: "w-16",
      off: "w-64",
    },
    inner:
      "h-full overflow-y-auto overflow-x-hidden bg-gray-50 py-4 px-3 dark:bg-[#c8a485]/90",
  },
  collapse: {
    button:
      "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-[#c8a485] dark:text-white dark:hover:bg-[#c8a485]",
    icon: {
      base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-our-black dark:group-hover:text-white",
      open: {
        off: "",
        on: "text-gray-900",
      },
    },
    label: {
      base: "ml-3 flex-1 whitespace-nowrap text-left",
      icon: {
        base: "h-6 w-6 transition ease-in-out delay-0",
        open: {
          on: "rotate-180",
          off: "",
        },
      },
    },
    list: "space-y-2 py-2",
  },
  cta: {
    base: "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-[#c8a485]",
    color: {
      blue: "bg-cyan-50 dark:bg-cyan-900",
      dark: "bg-dark-50 dark:bg-dark-900",
      failure: "bg-red-50 dark:bg-red-900",
      gray: "bg-alternative-50 dark:bg-alternative-900",
      green: "bg-green-50 dark:bg-green-900",
      light: "bg-light-50 dark:bg-light-900",
      red: "bg-red-50 dark:bg-red-900",
      purple: "bg-purple-50 dark:bg-purple-900",
      success: "bg-green-50 dark:bg-green-900",
      yellow: "bg-yellow-50 dark:bg-yellow-900",
      warning: "bg-yellow-50 dark:bg-yellow-900",
    },
  },
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-[#c8a485] dark:text-white dark:hover:bg-[#c8a485]",
    active: "bg-gray-100 dark:bg-[#c8a485]",
    collapsed: {
      insideCollapse: "group w-full pl-8 transition duration-75",
      noIcon: "font-bold",
    },
    content: {
      base: "px-3 flex-1 whitespace-nowrap",
    },
    icon: {
      base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-our-black dark:group-hover:text-our-black",
      active: "text-gray-700 dark:text-our-black",
    },
    label: "",
    listItem: "dark:hover:bg-[#c8a485]",
  },
  items: {
    base: "dark:hover:bg-[#c8a485]",
  },
  itemGroup: {
    base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-[#c8a485]",
  },
  logo: {
    base: "mb-5 flex items-center",
    collapsed: {
      on: "hidden",
      off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
    },
    img: "mx-auto h-6 sm:h-9",
  },
};

export default function Dashboard() {
  const contesto = useContext(userContext);
  return (
    <div className="flex">
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="h-screen rounded-none dark:bg-light-bg"
        theme={themeNav}
      >
        <Sidebar.Logo
          theme={themeNav.logo}
          href="/"
          img="/src/assets/logo_white-03.svg"
          imgAlt="LOKI logo"
          className="h-9 sm:h-10 w-full"
        ></Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {contesto === 18 && (
              <Sidebar.Item href="#" icon={HiChartPie} theme={themeNav.item}>
                <Link to="/dashboard/overview">Dashboard</Link>
              </Sidebar.Item>
            )}

            <Sidebar.Collapse
              icon={HiShoppingBag}
              label="E-commerce"
              theme={themeNav.collapse}
            >
              <Link to={"/dashboard/sales"}>
                <Sidebar.Item href="#" theme={themeNav.item}>
                  Sales
                </Sidebar.Item>
              </Link>
              <Link to={"/dashboard/refunds"}>
                <Sidebar.Item href="#" theme={themeNav.item}>
                  Refunds
                </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>

            {contesto === 18 && (
              <Link to="/dashboard/users">
                <Sidebar.Item icon={HiUser} theme={themeNav.item}>
                  Users
                </Sidebar.Item>
              </Link>
            )}
            {contesto === 18 && (
              <Link to={"/dashboard/products"}>
                <Sidebar.Item icon={HiShoppingBag} theme={themeNav.item}>
                  Products
                </Sidebar.Item>
              </Link>
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Routes>
        {contesto === 18 && <Route path="/overview" element={<Overview />} />}
        {contesto === 18 && (
          <Route path="/products" element={<ProductsDashboard />} />
        )}
        <Route path="/sales" element={<SalesDashboard />} />
        <Route
          path="/refunds"
          element={<EcommerceDashboard pageName="Refunds" />}
        />
        {contesto === 18 && (
          <Route path="/users" element={<UsersDashboard />} />
        )}
      </Routes>
    </div>
  );
}
