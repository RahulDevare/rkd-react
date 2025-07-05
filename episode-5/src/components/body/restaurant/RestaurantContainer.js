import RestaurantCard from "./RestaurantCard";
import restaurantData from "../../../data/resData";
import { useState } from "react";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    restaurantData.restaurants
  );

  //let listOfRestaurants = restaurantData.restaurants;

  return (
    <div className="restaurant-container-wrapper">
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants or dishes" />
        <button>Search</button>
        <button
          className="top-rated-filter"
          onClick={() => {
            // Logic to filter top-rated restaurants
            const filteredList = listOfRestaurants.filter((restaurant) => {
              return restaurant.info.avgRating > 4.3;
            });
            //let listOfRestaurants is updated but not re-rendered
            //listOfRestaurants = filteredList;
            setListOfRestaurants(filteredList);
            console.log("Filtered top-rated restaurants: ", filteredList);
            // Rerender the component
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
