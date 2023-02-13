import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useItem from "../../Hooks/useItem";

const MyItems = () => {
  const navigate = useNavigate();
  const { perfumes, setPerfumes } = useItem();
  const [user, loading] = useAuthState(auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const email = user.email;
      const { data } = await axios.get(
        `https://perfume-stockpile-server.vercel.app/myItems?email=${email}`
      );
      setProducts(data);
    };
    getProduct();
  }, [user]);

  const handleDeleteItem = (id) => {
    console.log("clicked");
    const url = `https://perfume-stockpile-server.vercel.app/item/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = perfumes.filter((perfume) => perfume._id === id);
        setPerfumes(remaining);
      });
  };

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl text-center my-3 font-serif font-bold">
        Your Added Product
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Supplier
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      ID
                    </th>
                  </tr>
                </thead>
                {products.map((product) => (
                  <tbody key={product._id}>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product?.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        ${product.price}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.quantity}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.supplierName}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product._id}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => {
                            handleDeleteItem(product._id);
                          }}
                          className="py-2 px-4 bg-transparent text-black font-semibold border border-[#4F46E5] rounded hover:bg-[#4F46E5] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-3 w-1/3 mt-3"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            navigate("/addItem");
                          }}
                          className="py-2 px-4 bg-transparent text-black font-semibold border border-[#4F46E5] rounded hover:bg-[#4F46E5] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 mr-3 w-1/3 mt-3"
                        >
                          Add New
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
