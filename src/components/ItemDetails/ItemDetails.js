import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [perfume, setPerfume] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/perfume/${id}`)
      .then((res) => {
        setPerfume(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(perfume);

  return (
    <div>
      <h1 className="text-5xl">hi this is item details of {id}</h1>
    </div>
  );
};

export default ItemDetails;
