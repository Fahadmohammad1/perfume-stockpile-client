import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [perfume, setPerfume] = useState({});

  useEffect(() => {
    axios
      .get(`https://perfume-stockpile-server.vercel.app/perfume/${id}`)
      .then((res) => {
        setPerfume(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleDelivered = () => {
    const productQuantity = perfume.quantity;

    const newQuantity = productQuantity - 1;
    console.log(newQuantity);

    const url = `https://perfume-stockpile-server.vercel.app/perfume/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        const quantity = newQuantity;
        const updateStock = { ...perfume, quantity };
        setPerfume(updateStock);
      });
  };

  const handleRestock = (e) => {
    e.preventDefault();
    const previousStock = perfume.quantity;
    const fieldStock = parseInt(e.target.number.value);
    const newQuantity = previousStock + fieldStock;
    console.log(newQuantity);

    const url = `https://perfume-stockpile-server.vercel.app/perfume/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        const quantity = newQuantity;
        const updatedQuantity = { ...perfume, quantity };
        setPerfume(updatedQuantity);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[#F6F6F6]">
      <div className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="perfume"
              className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded"
              src={perfume.picture}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex items-center">
              <div>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {perfume.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-gray-600 ml-3">
                      Supplier: {perfume.supplierName}
                    </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a href="/" className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="/" className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="/" className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{perfume.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">ID : {perfume._id}</span>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Quantity</span>
                    <div className="relative">
                      <span className="rounded border appearance-none border-gray-300 py-2 pl-5 pr-5 text-yellow-600">
                        {perfume.quantity}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {perfume.price}
                  </span>
                  <button
                    onClick={handleDelivered}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    delivered
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-4xl font-serif text-center">Restock the Items</h1>
          <form onSubmit={handleRestock} className="m-4 flex justify-center">
            <input
              name="number"
              type="number"
              className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Enter Quantity"
            />
            <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
              Restock
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
