import React from "react";
import { useNavigate } from "react-router-dom";
import useItem from "../../Hooks/useItem";
import Items from "../Items/Items";
import "./Home.css";
import { Carousel } from "3d-react-carousal";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Home = () => {
  const [, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { perfumes } = useItem();

  if (loading) {
    return (
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Please Wait...
      </button>
    );
  }
  const slides = [
    <img
      src="https://do84cgvgcm805.cloudfront.net/article/585/1200/e2517ddf9da9da6c759704f24162a0fbbe5145e792fd61ee7278902dfb173338.jpg"
      alt="1"
    />,
    <img
      src="https://do84cgvgcm805.cloudfront.net/article/585/1200/e2517ddf9da9da6c759704f24162a0fbbe5145e792fd61ee7278902dfb173338.jpg"
      alt="2"
    />,
    <img
      src="https://do84cgvgcm805.cloudfront.net/article/585/1200/e2517ddf9da9da6c759704f24162a0fbbe5145e792fd61ee7278902dfb173338.jpg"
      alt="3"
    />,
    <img
      src="https://do84cgvgcm805.cloudfront.net/article/585/1200/e2517ddf9da9da6c759704f24162a0fbbe5145e792fd61ee7278902dfb173338.jpg"
      alt="4"
    />,
    <img
      src="https://do84cgvgcm805.cloudfront.net/article/585/1200/e2517ddf9da9da6c759704f24162a0fbbe5145e792fd61ee7278902dfb173338.jpg"
      alt="5"
    />,
  ];
  return (
    <div className="gradient">
      <div className="container mx-auto px-6 lg:px-0 relative z-0 lg:flex items-center py-16 xl:py-24">
        <div className="lg:w-3/5 xl:w-1/2 flex flex-col items-start relative z-0 text-left">
          <span className="font-bold uppercase text-yellow-400 pl-1">
            Perfumes
          </span>
          <h1 className="font-bold text-4xl lg:text-6xl sm:text-7xl text-white leading-tight mt-4">
            Let yourself be carried
            <br />
            by nature
          </h1>
          <a
            href="/"
            className="block bg-white py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10 hover:bg-[#FACC15]"
          >
            Discover
          </a>
        </div>
        <div className="w-full h-full mt-5 order-10">
          <Carousel slides={slides} autoplay={true} interval={3000} />
        </div>
      </div>
      <h1 className="text-4xl font-serif text-center my-3">Availabe Items</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {perfumes.slice(0, 6).map((perfume) => (
          <div key={perfume._id} className="container mx-auto">
            <div className="card bg-[#15263F] w-80 h-full rounded-xl p-6 space-y-4 mx-auto">
              <div>
                <img
                  className="w-full h-64 rounded-md  hover:bg-cyan-300 group-hover:scale-110 transition duration-300 ease-in-out"
                  src={perfume.picture}
                  alt=""
                />
              </div>
              <div id="description" className="space-y-4">
                <a href="/">
                  <h2 className="text-white font-semibold text-xl transition hover:text-cyan-300">
                    {perfume.name}
                  </h2>
                </a>
                <p className="text-slate-500 text-sm select-none">
                  {perfume.description.slice(0, 80)}
                </p>
                <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                  <span
                    id="price"
                    className="text-cyan-300 flex justify-between items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 320 512"
                      fill="#67E7F9"
                    >
                      <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                    </svg>
                    $ {perfume.price}
                  </span>
                  <span className="text-slate-500 flex justify-between items-center select-none">
                    Quantity: {perfume.quantity}
                  </span>
                </div>
                <div className="flex text-sm items-center">
                  <span className="ml-2 text-slate-500">
                    Supplier Name:
                    <span className="text-gray-300 transition hover:text-cyan-300">
                      {perfume.supplierName}
                    </span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate(`/inventory/${perfume._id}`);
                }}
                className="py-2 px-4 bg-transparent text-white font-semibold border border-[#4F46E5] rounded hover:bg-[#4F46E5] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-3 w-full mt-3"
              >
                Stock Update
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/4 mx-auto mt-4">
        <button
          onClick={() => {
            navigate("/myItems");
          }}
          className="py-2 px-4 bg-transparent text-white font-bold border border-[#4F46E5] rounded hover:bg-[#4F46E5] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-3 w-full mt-3"
        >
          Manage Inventory
        </button>
      </div>
      <div>
        <Items></Items>
      </div>
    </div>
  );
};

export default Home;
