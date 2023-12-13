"use client";

import { useMediaQuery } from "@react-hook/media-query";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const isMobileOrTablet = useMediaQuery("(max-width: 767px)");

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
    /* console.log("Toggle state:", toggle); */
  };
  useEffect(() => {
    console.log("Toggle state:", toggle);
  }, [toggle]);

  const handleLinkClick = () => {
    // Chiudi il menu quando viene cliccato un link nel menu mobile
    setToggle(false);
  };

  return (
    <Navbar>
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
          <div className="flex items-center mx-auto">
            <Navbar.Brand>
              {/* <img
                src="/favicon.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
              /> */}
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mr-60">
                Flowbite React
              </span>
            </Navbar.Brand>
          </div>
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
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        </>
      ) : (
        <>
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
          <button onClick={handleToggle}>
            <Navbar.Toggle />
          </button>
          {toggle && (
            <>
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
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            
          </div>
            <Navbar.Collapse>
              <Navbar.Link href="#" active onClick={handleLinkClick}>
                Home
              </Navbar.Link>
              <Navbar.Link href="#" onClick={handleLinkClick}>
                Shop
              </Navbar.Link>
              <Navbar.Link href="#" onClick={handleLinkClick}>
                About
              </Navbar.Link>
              <Navbar.Link href="#" onClick={handleLinkClick}>
                Contact
              </Navbar.Link>
            </Navbar.Collapse>
            </>
          )}
        </>
      )}
    </Navbar>
  );
}
