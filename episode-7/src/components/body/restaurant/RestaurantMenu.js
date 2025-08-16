import { useState, useEffect } from "react";
import RestaurantContainerShimmer from "./RestaurantContainerShimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API_URL } from "../../../util/constant";


const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const params = useParams();
    console.log("Params: ", params); // Log the params to see the restaurant ID

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const resId = params.resId; // Get restaurant ID from URL params
    const swiggyResponse = await fetch(
        RES_MENU_API_URL + 
        resId
    );
    const json = await swiggyResponse.json();
    setResInfo(json?.data);
    console.log("Restaurant Menu Data: ", json.data);
  }

    if (!resInfo) {
        // Return shimmering effect or skeleton loader here
        return <RestaurantContainerShimmer />;
    }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
      <div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwoMessage}</p>
        <h2>Menu</h2>
        {categories.map((category) => (
          <div key={category.card.card.categoryId}>
            <h3>{category.card.card.title}</h3>
            <ul>
              {itemCards.map((item) => (
                <li key={item.card.info.id}>
                  <h4>{item.card.info.name}</h4>
                  <p>Price: {item.card.info.price / 100 || "N/A"}</p>
                  <p>Description: {item.card.info.description || "N/A"}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
};

export default RestaurantMenu;
