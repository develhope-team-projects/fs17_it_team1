import { Link, Route, Routes } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

import Inbox from "./Inbox/Inbox";
import UsersDashboard from "./UsersDashboard/UsersDashboard";
import { EcommerceDashboard } from "./EcommerceDashboards/EcommerceDashboard";
import Overview from "./Overview/Overview";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="h-screen rounded-none dark:bg-gray-800"
      >
        <Sidebar.Logo
          href="#"
          img="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
          imgAlt="Flowbite logo"
        >
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              <Link to="/dashboard/overview">dashboard</Link>
            </Sidebar.Item>

            <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
              <Link to={"/dashboard/sales"}>
                <Sidebar.Item href="#">Sales</Sidebar.Item>
              </Link>
              <Link to={"/dashboard/refunds"}>
                <Sidebar.Item href="#">Refunds</Sidebar.Item>
              </Link>
            </Sidebar.Collapse>

            <Link to="/dashboard/inbox">
              <Sidebar.Item icon={HiInbox}>Inbox</Sidebar.Item>
            </Link>

            <Link to="/dashboard/users">
              <Sidebar.Item icon={HiUser}>Users</Sidebar.Item>
            </Link>
            <Link to={"/dashboard/products"}>
              <Sidebar.Item icon={HiShoppingBag}>Products</Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route
          path="/products"
          element={<EcommerceDashboard pageName="Products" />}
        />
        <Route
          path="/sales"
          element={<EcommerceDashboard pageName="Sales" />}
        />
        <Route
          path="/refunds"
          element={<EcommerceDashboard pageName="Refunds" />}
        />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/users" element={<UsersDashboard />} />
      </Routes>
    </div>
  );
}
