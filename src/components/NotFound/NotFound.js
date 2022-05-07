import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="md:flex">
      <div className="md:w-1/2 flex flex-col items-center justify-center mb-5 md:mb-0">
        <h1 className="text-8xl font-extrabold font-sans">
          404
          <hr className="w-1/2 mt-3 border-2 border-[#0ED3CF]" />
        </h1>
        <h1 className="text-3xl mt-3 text-left pr-12">Not Found</h1>
        <button
          onClick={() => {
            navigate("/inventory");
          }}
          className="py-2 px-4 bg-transparent text-gray-400 font-semibold border border-gray-400 rounded hover:bg-black hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-20 mt-3"
        >
          Go Home
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://tailwindcomponents.com/svg/404-error-with-broken-robot-pana.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
