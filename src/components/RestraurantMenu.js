import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./shimmer";
import useRestarunt from "../utils/useRestaurant";
const RestraurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestarunt(id);
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
