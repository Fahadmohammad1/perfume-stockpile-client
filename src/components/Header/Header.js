import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="sticky top-0 z-10">
      <nav
        className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <Link
              to="/"
              className="
        flex
        items-center
        text-[#4F46E5]
        text-3xl
        font-bold
        mt-2
        lg:mt-0
        mr-1
        
      "
            >
              Perfume Stockpile
            </Link>
            <ul
              className={
                user
                  ? "navbar-nav flex flex-col pl-0 list-style-none items-center mx-auto "
                  : "hidden"
              }
            >
              <li className="nav-item p-2">
                <Link
                  to="/inventory"
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="/"
                >
                  Inventory
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="/myItems"
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="/"
                >
                  My Items
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="/addItem"
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="/"
                >
                  Add Item
                </Link>
              </li>
            </ul>
            <span className="mr-3 ml-3">
              <Link
                to="/blogs"
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                href="/"
              >
                Blogs
              </Link>
            </span>
          </div>

          <div className="flex items-center relative">
            <div className="dropdown relative">
              <div className={user ? "hidden" : "block"}>
                <Link to="/login">
                  <button className="py-2 px-4 bg-transparent text-black font-semibold border border-[#4F46E5] rounded hover:bg-[#4F46E5] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-3">
                    LOGIN
                  </button>
                </Link>
                <Link to="/register">
                  <button className="py-2 px-4 bg-transparent text-black font-semibold border border-[#4F46E5] rounded hover:bg-[#4F46E5] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-3">
                    REGISTER
                  </button>
                </Link>
              </div>
            </div>
            <div className="dropdown relative">
              <a
                className="dropdown-toggle flex items-center hidden-arrow"
                href="/"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={
                    user?.photoURL
                      ? `${user?.photoURL}`
                      : "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                  }
                  className="rounded-full"
                  style={{ height: "32px", width: "32px" }}
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <button
                    onClick={() => {
                      signOut(auth);
                    }}
                    className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                  >
                    LOGOUT
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
