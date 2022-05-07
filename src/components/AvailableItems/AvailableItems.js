import React, { useEffect, useState } from "react";
import AvailableItem from "../AvailableItem/AvailableItem";

const AvailableItems = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/perfume")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);
  return (
    <div className="md:grid grid-cols-3 gap-y-4">
      {perfumes.map((perfume) => (
        <AvailableItem key={perfume._id} perfume={perfume}></AvailableItem>
      ))}
    </div>
  );
};

export default AvailableItems;
