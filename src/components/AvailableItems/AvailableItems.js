import React, { useEffect, useState } from "react";
import AvailableItem from "../AvailableItem/AvailableItem";

const AvailableItems = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);
  return (
    <div className="md:grid grid-cols-3 gap-y-4">
      {perfumes.map((perfume) => (
        <AvailableItem perfume={perfume}></AvailableItem>
      ))}
    </div>
  );
};

export default AvailableItems;
