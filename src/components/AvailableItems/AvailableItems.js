import React, { useEffect, useState } from "react";
import useItem from "../../Hooks/useItem";
import AvailableItem from "../AvailableItem/AvailableItem";

const AvailableItems = () => {
  const { perfumes } = useItem();
  return (
    <div className="md:grid grid-cols-3 gap-y-4">
      {perfumes.map((perfume) => (
        <AvailableItem key={perfume._id} perfume={perfume}></AvailableItem>
      ))}
    </div>
  );
};

export default AvailableItems;
