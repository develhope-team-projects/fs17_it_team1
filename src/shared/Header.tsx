"use client";

import { useMediaQuery } from "@react-hook/media-query";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function Header() {
  const isMobileOrTablet = useMediaQuery("(max-width: 767px)");
  return (
    <Navbar fluid>
      {!isMobileOrTablet ? (
        <>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">Shop</Navbar.Link>
            <Navbar.Link href="#">About </Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
          <Navbar.Brand>
            {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        </>
      ) : (
        <>
          <Navbar.Brand>
            <img
              src="/favicon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">Shop</Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
}
