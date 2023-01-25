import { useState, useEffect} from "react";
import { FETCH_ALL_RESTARUNT } from "../config";
const useGetRestarunt = (searchText) => {
  const [restarunts, setRestarunt] = useState([]);
  useEffect(() => {
    //Callback function
    getRestraunts();
  }, [searchText]); // [] known as dependecy function or dependncy array
  // id dont want to dependent on anything set []
  async function getRestraunts() {
    const data = await fetch(FETCH_ALL_RESTARUNT);
    const json = await data.json();
    setRestarunt(json?.data?.cards[2]?.data?.data?.cards); // optinal chaining
  }
  return restarunts;
};

export default useGetRestarunt;
