import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestaurantContainerShimmer from "./RestaurantContainerShimmer";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    fetchSwiggyRestaurants();
  }, []);

  async function fetchSwiggyRestaurants() {
    const swiggyResponse = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await swiggyResponse.json();
    console.log("Swiggy API Data: ", data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    console.log("Restaurant Data: ", listOfRestaurants);
  }

  if(!listOfRestaurants || listOfRestaurants.length === 0) {
    //return <h1>Loading...</h1>;
    //Return shimmering effect or skeleton loader here
    return <RestaurantContainerShimmer />;
  }


  return (
    <div className="restaurant-container-wrapper">
      <div className="search-bar">
        <input id="search-restaurant" className="search-input" type="text" placeholder="Search for restaurants or dishes" />
        <button className="search-button" onClick={() => {
          const searchTerm = document.getElementById("search-restaurant").value;
          const filteredList = listOfRestaurants.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredRestaurants(filteredList);
        }}>Search</button>
        <button
          className="top-rated-filter"
          onClick={() => {
            // Logic to filter top-rated restaurants
            const filteredList = listOfRestaurants.filter((restaurant) => {
              return restaurant.info.avgRating > 4.3;
            });
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button onClick={() => {
          setFilteredRestaurants(listOfRestaurants);
          document.getElementById("search-restaurant").value = "";
        }}>Clear Filters</button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
