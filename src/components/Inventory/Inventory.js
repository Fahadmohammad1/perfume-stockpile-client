import React from "react";
import { useNavigate } from "react-router-dom";
import useItem from "../../Hooks/useItem";

const AvailableItem = () => {
  const { perfumes, setPerfumes } = useItem();

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are You sure You want to delete?");
    if (proceed) {
      const url = `https://perfume-stockpile-server.vercel.app/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = perfumes.filter((perfume) => perfume._id === id);
          setPerfumes(remaining);
        });
    }
  };

  const navigate = useNavigate();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 my-5">
      {perfumes.map((perfume) => (
        <div key={perfume._id} className="container mx-auto">
          <div className="card bg-[#15263F] w-80 h-full rounded-xl p-6 space-y-4 mx-auto">
            <div className="">
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
                {perfume.description?.slice(0, 80)}
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
                  Product Id:
                  <span className="text-gray-300 transition hover:text-cyan-300">
                    {perfume._id}
                  </span>
                </span>
              </div>
              <div className="flex text-sm items-center">
                <span className="ml-2 text-slate-500">
                  Supplier Name:
                  <span className="text-gray-300 transition hover:text-cyan-300 font-bold">
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
            <button
              onClick={() => {
                handleDeleteItem(perfume._id);
              }}
              className="py-2 px-4 bg-transparent text-white font-semibold border border-[#4F46E5] rounded hover:bg-[#4F46E5] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-3 w-full mt-3"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableItem;
