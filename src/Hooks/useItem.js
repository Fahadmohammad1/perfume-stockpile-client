import { useEffect, useState } from "react";

const useItem = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    fetch("https://damp-falls-68111.herokuapp.com/perfume")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);
  return { perfumes, setPerfumes };
};

export default useItem;
