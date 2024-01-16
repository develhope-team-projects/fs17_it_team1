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
import { useContext } from "react";
import { userContext } from "../loginESubscription/AuthContext";

export default function Dashboard() {
  const contesto = useContext(userContext);
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
            {contesto === 18 && (
              <Sidebar.Item href="#" icon={HiChartPie}>
                <Link to="/dashboard/overview">dashboard</Link>
              </Sidebar.Item>
            )}

            <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
              <Link to={"/dashboard/sales"}>
                <Sidebar.Item href="#">Sales</Sidebar.Item>
              </Link>
              <Link to={"/dashboard/refunds"}>
                <Sidebar.Item href="#">Refunds</Sidebar.Item>
              </Link>
            </Sidebar.Collapse>

            {contesto === 18 && (
              <Link to="/dashboard/users">
                <Sidebar.Item icon={HiUser}>Users</Sidebar.Item>
              </Link>
            )}
            {contesto === 18 && (
              <Link to={"/dashboard/products"}>
                <Sidebar.Item icon={HiShoppingBag}>Products</Sidebar.Item>
              </Link>
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Routes>
        {contesto === 18 && <Route path="/overview" element={<Overview />} />}
        {contesto === 18 && (
          <Route
            path="/products"
            element={<EcommerceDashboard pageName="Products" />}
          />
        )}
        <Route
          path="/sales"
          element={<EcommerceDashboard pageName="Sales" />}
        />
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
