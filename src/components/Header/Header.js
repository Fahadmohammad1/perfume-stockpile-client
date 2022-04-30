import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="sticky top-0 z-10">
      <header className="text-black bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a href="/" className="mr-5 hover:text-white">
              First Link
            </a>
            <a href="/" className="mr-5 hover:text-white">
              Second Link
            </a>
            <a href="/" className="mr-5 hover:text-white">
              Third Link
            </a>
            <a href="/" className="hover:text-white">
              Fourth Link
            </a>
          </nav>
          <a
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl xl:block  text-black">
              Perfume House
            </span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end items-center ml-4 lg:ml-0">
            <button className="gradient-btn inline-flex items-center  border-0 py-1 px-3  hover:bg-white rounded text-base mt-4 md:mt-0 text-white mr-3">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1 "
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>

            <a href="/" className="block relative">
              <img
                alt="profil"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
