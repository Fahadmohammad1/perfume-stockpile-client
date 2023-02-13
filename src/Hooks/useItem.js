import { useEffect, useState } from "react";

const useItem = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    fetch("https://perfume-stockpile-server.vercel.app/perfume")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);
  return { perfumes, setPerfumes };
};

export default useItem;
