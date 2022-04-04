import { useEffect, useState } from "react";

const CustomHooks = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};
export default CustomHooks();
