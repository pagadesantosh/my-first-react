import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";
const useRestarunt = (id) => {
  const [restaurant, setRestrarunt] = useState(null);

  useEffect(() => {
    getReturantInfo();
  }, []);

  async function getReturantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    console.log(json);
    setRestrarunt(json.data);
  }
  // return restarunt data
  return restaurant;
};

export default useRestarunt;
