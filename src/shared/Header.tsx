import { useMediaQuery } from "@react-hook/media-query";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../loginESubscription/AuthContext";
import useUserData from "../dashboard/UsersDashboard/useUserData";
import useLogin from "../loginESubscription/useLogin";
import Cart from "../ecommerce/Cart/Cart";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const isMobileOrTablet = useMediaQuery("(max-width: 767px)");
  const { userData, setUserData, loading, error, onFetchData } = useUserData();
  const contesto = useContext(userContext);
  const loggedUser = userData.filter((el) => el.id === contesto);
  const { logout } = useLogin();

  const handleToggle = () => {
    if (isMobileOrTablet) {
      setToggle((prevToggle) => !prevToggle);
    }
    console.log(toggle);
  };

  const handleLinkClick = () => {
    if (isMobileOrTablet) {
      setToggle(false);
    }
  };

  return (
    <Navbar className=" bg-traspartent dark:bg-trasparent absolute w-full max-w-screen-xl">
      {!isMobileOrTablet ? (
        <>
          <Navbar.Collapse>
            <Navbar.Link href="/" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="/ecommerce/store" className="dark:text-gray-300">
              Shop
            </Navbar.Link>
            <Navbar.Link href="#" className="dark:text-gray-300">
              About{" "}
            </Navbar.Link>
            <Navbar.Link href="#" className="dark:text-gray-300">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
          <div className="flex items-center ">
            <Navbar.Brand>
              <img
                src="/src/assets/logo_white-03.svg"
                className="mr-44 h-6 sm:h-9"
                alt="LOKI Logo"
              />
            </Navbar.Brand>
          </div>

          <div className="flex md:order-2">
            {/* bottone cart */}
            <Cart />
            <div className="flex items-center z-50">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    rounded
                  />
                }
              >
                {contesto != 0 && (
                  <Dropdown.Header>
                    <span className="block text-sm">
                      {loggedUser[0] &&
                        loggedUser[0].first_name +
                          " " +
                          loggedUser[0].last_name}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {loggedUser[0] && loggedUser[0].email}
                    </span>
                  </Dropdown.Header>
                )}
                {contesto != 0 && (
                  <Dropdown.Item>
                    <Link to="/dashboard">Dashboard</Link>
                  </Dropdown.Item>
                )}
                {contesto != 0 && <Dropdown.Item>Settings</Dropdown.Item>}
                <Dropdown.Divider />
                {contesto != 0 ? (
                  <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                ) : (
                  <Dropdown.Item>
                    <Link to="/log-in">Sign in</Link>
                  </Dropdown.Item>
                )}
              </Dropdown>
            </div>
            <Navbar.Toggle />
          </div>
        </>
      ) : (
        /* /////MOBILE///// */
        <>
          <Navbar.Brand>
            <img
              src="/src/assets/logo_white-03.svg"
              className="mr-3 h-6 sm:h-9"
              alt="LOKI Logo"
            />
          </Navbar.Brand>

          {/* bottone toggle */}
          <button onClick={handleToggle} className="ml-auto pr-2">
            <Navbar.Toggle />
          </button>
          {/* bottone cart */}
          <Cart />

          {/* profilo persona e uscita a comparsa menu*/}
          {toggle && (
            <>
              <div className="flex md:order-2 items-center">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt="User settings"
                      img="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                      rounded
                    />
                  }
                >
                  {contesto != 0 && (
                    <Dropdown.Header>
                      <span className="block text-sm">
                        {loggedUser[0] &&
                          loggedUser[0].first_name +
                            " " +
                            loggedUser[0].last_name}
                      </span>
                      <span className="block truncate text-sm font-medium">
                        {loggedUser[0] && loggedUser[0].email}
                      </span>
                    </Dropdown.Header>
                  )}
                  {contesto != 0 && (
                    <Dropdown.Item>
                      <Link to="/dashboard">Dashboard</Link>
                    </Dropdown.Item>
                  )}
                  {contesto != 0 && <Dropdown.Item>Settings</Dropdown.Item>}
                  <Dropdown.Divider />
                  {contesto != 0 ? (
                    <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                  ) : (
                    <Dropdown.Item>
                      <Link to="/log-in">Sign in</Link>
                    </Dropdown.Item>
                  )}
                </Dropdown>
              </div>
              <div className="bg-gray-800/[0.4] list-none w-full  mt-2 md:block md:w-auto flex flex-col text-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                <div className="flex flex-col">
                  <Navbar.Link
                    href="/"
                    onClick={handleLinkClick}
                    className="dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-900"
                  >
                    Home
                  </Navbar.Link>
                  <Navbar.Link
                    href="/ecommerce/store"
                    onClick={handleLinkClick}
                    className="dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-900"
                  >
                    Shop
                  </Navbar.Link>
                  <Navbar.Link
                    href="#"
                    onClick={handleLinkClick}
                    className="dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-900"
                  >
                    About
                  </Navbar.Link>
                  <Navbar.Link
                    href="#"
                    onClick={handleLinkClick}
                    className="dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-900"
                  >
                    Contact
                  </Navbar.Link>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </Navbar>
  );
}
