import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./shimmer";
const RestraurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestrarunt] = useState(null);

  useEffect(() => {
    getReturantInfo();
  }, []);

  async function getReturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=18.5142377&lng=73.9256948&menuId=" + id
    );
    const json = await data.json();
    console.log(json);
    setRestrarunt(json.data);
  }

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <>
      <h3>Menu Details - {id}</h3>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
      <h3>{restaurant.area}</h3>
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRatingString}</h3>
      <h2>Menu</h2>
      <ul>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default RestraurantMenu;
