import React from "react";
import Items from "../Items/Items";
import "./Home.css";

const Home = () => {
  return (
    <div className="gradient">
      <div class="container mx-auto px-6 md:px-12 relative z-0 flex items-center py-32 xl:py-40">
        <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-0 text-left">
          <span class="font-bold uppercase text-yellow-400">Perfumes</span>
          <h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
            Let yourself be carried
            <br />
            by nature
          </h1>
          <a
            href="/"
            class="block bg-white py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10 hover:bg-[#FACC15]"
          >
            Discover
          </a>
        </div>
      </div>
      <div>
        <Items></Items>
      </div>
    </div>
  );
};

export default Home;
