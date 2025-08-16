import { IMAGE_CDN_URL } from "../../../util/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurant-card">
      <h2>{resData.name}</h2>
      <img className="res-image" src={IMAGE_CDN_URL+resData.cloudinaryImageId} alt="Dish" />
      <p>Cuisines: {resData.cuisines.join(", ")}</p>
      <p>Price: {resData.costForTwo}</p>
      <p>Rating: {resData.avgRating}</p>
      <p>Delivery Time: {resData.deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;