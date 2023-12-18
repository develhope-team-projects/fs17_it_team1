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
import UsersTableDash from "./UsersDashboard/UsersTableDash";
import UsersDashboard from "./UsersDashboard/UsersDashboard";

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
              <Link to="/dashboard">dashboard</Link>
            </Sidebar.Item>

            <Link to="/dashboard/test">
              <Sidebar.Item icon={HiChartPie}>Test</Sidebar.Item>
            </Link>

            <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>

            <Link to="/dashboard/inbox">
              <Sidebar.Item icon={HiInbox}>Inbox</Sidebar.Item>
            </Link>

            <Link to="/dashboard/users">
              <Sidebar.Item icon={HiUser}>Users</Sidebar.Item>
            </Link>

            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Routes>
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/users" element={<UsersDashboard />} />
      </Routes>
    </div>
  );
}
