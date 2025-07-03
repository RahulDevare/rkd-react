import React from 'react';
import ReactDOM from 'react-dom/client';

//Swiggy App
// App Component
  // Header Component
    // Logo
    // Navigation
  // Body Component
    // Search Bar
    // - Search Input
    // - Search Button
    // Restaurant Card
    // - Name
    // - Dish Image
    // - Dish Name
    // - Dish Price
    // - Rating
    // - Cuisines
    // - Delivery Time
  // Footer Component
    // - Copyright
    // - Links
    // - Address

    const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const App = () => {
  return (
    <div className="app"> 
      <Header />
      <Body />
      <Footer />
    </div>
  );
}


const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};
const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" alt="Swiggy Logo" />
    </div>
  );
};
const Navigation = () => {
  return (
    <nav className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
const Body = () => {
  return (
    <main className="body">
      <SearchBar />
      <RestaurantContainer />
    </main>
  );
};

const RestaurantContainer = () => {
  return (
     <div className="restaurant-container">
    {restaurantData.restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
    ))}
  </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <SearchInput />
      <SearchButton />
    </div>
  );
};
const SearchInput = () => {
  return <input type="text" placeholder="Search for restaurants or dishes" />;
};
const SearchButton = () => {
  return <button>Search</button>;
};
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurant-card">
      <h2>{resData.name}</h2>
      <img className="res-image" src={imageUrl+resData.cloudinaryImageId} alt="Dish" />
      <p>Cuisines: {resData.cuisines.join(", ")}</p>
      <p>Price: {resData.costForTwo}</p>
      <p>Rating: {resData.avgRating}</p>
      <p>Delivery Time: {resData.deliveryTime}</p>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 Swiggy</p>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Contact Us</li>
      </ul>
      <p>Address: 123 Swiggy Lane, Food City</p>
    </footer>
  );
};
const rootScriptElement = ReactDOM.createRoot(document.getElementById('swiggy-root'));
rootScriptElement.render(<App />);

const restaurantData = {
  restaurants: [
    {
      info: {
        id: "234875",
        name: "Adil Hotel",
        cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
        locality: "Rautha Wada",
        areaName: "Chhindwara Locality",
        costForTwo: "₹150 for two",
        cuisines: ["North Indian", "Biryani", "Tandoor"],
        avgRating: 4.3,
        parentId: "27123",
        avgRatingString: "4.3",
        deliveryTime: 25,
        totalRatingsString: "1.3K+",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      info: {
        id: "151656",
        name: "Dev International",
        cloudinaryImageId: "enj3srsnhbltbom2ovvh",
        locality: "khajri road",
        areaName: "Mohan Nagar",
        costForTwo: "₹100 for two",
        cuisines: ["North Indian", "Chinese", "Fast Food", "Beverages"],
        avgRating: 4.3,
        parentId: "71556",
        avgRatingString: "4.3",
        deliveryTime: 30,
        totalRatingsString: "538",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      info: {
        id: "151518",
        name: "Bakery World",
        cloudinaryImageId: "mt2aggiscfl3yviatwng",
        locality: "Parasia Road",
        areaName: "Parasia Road",
        costForTwo: "₹250 for two",
        cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
        avgRating: 4.4,
        veg: true,
        parentId: "40363",
        avgRatingString: "4.4",
        deliveryTime: 35,
        totalRatingsString: "275",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      info: {
        id: "151649",
        name: "Hotel Sai Nath & Sai Restaurant",
        cloudinaryImageId: "vkhcohhmqfczycw9vsar",
        locality: "railway station",
        areaName: "Chhindwara Locality",
        costForTwo: "₹200 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts",
        ],
        avgRating: 4.4,
        deliveryTime: 28,
        veg: true,
        parentId: "101802",
        avgRatingString: "4.4",
        totalRatingsString: "1.0K+",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      info: {
        id: "658210",
        name: "The Fusion Lounge",
        cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
        locality: "Triloki nagar",
        areaName: "Railway Station",
        costForTwo: "₹300 for two",
        cuisines: [
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts",
        ],
        avgRating: 4.2,
        parentId: "395453",
        avgRatingString: "4.2",
        deliveryTime: 33,
        totalRatingsString: "353",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      info: {
        id: "184424",
        name: "Sab Ghar Tak Foods",
        cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
        locality: "Sanchar Colony",
        areaName: "Parsia Road",
        costForTwo: "₹200 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts",
        ],
        avgRating: 4.1,
        parentId: "173932",
        avgRatingString: "4.1",
        deliveryTime: 30,
        totalRatingsString: "617",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      info: {
        id: "151515",
        name: "Gupta Bhojnalay",
        cloudinaryImageId: "jo9pdipf4elcuch8g55q",
        locality: "fulwara chowk",
        areaName: "Chhindwara Locality",
        costForTwo: "₹200 for two",
        cuisines: ["Fast Food", "Indian", "Beverages"],
        avgRating: 4.8,
        deliveryTime: 31,
        veg: true,
        parentId: "91635",
        avgRatingString: "4.8",
        totalRatingsString: "450",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      info: {
        id: "625927",
        name: "Kathi Junction",
        cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
        locality: "Bunglow Madhuvan Colony",
        areaName: "Prasia Road",
        costForTwo: "₹200 for two",
        cuisines: ["rolls", "Burgers", "Pizzas", "Fast Food"],
        avgRating: 4.2,
        parentId: "1935",
        avgRatingString: "4.2",
        deliveryTime: 34,
        totalRatingsString: "375",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      info: {
        id: "150591",
        name: "Satkar Restaurant",
        cloudinaryImageId: "rvxp5xbniat84r6efku2",
        locality: "Sinchai Colony",
        areaName: "Satkar Chowk",
        costForTwo: "₹250 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Indian",
          "Salads",
          "Desserts",
        ],
        avgRating: 4.4,
        deliveryTime: 30,
        veg: true,
        parentId: "21553",
        avgRatingString: "4.4",
        totalRatingsString: "2.9K+",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      info: {
        id: "385824",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
        locality: "Sinchai Colony",
        areaName: "Mohan Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.6,
        deliveryTime: 30,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.6",
        totalRatingsString: "314",
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
  ],
  theme: "Restaurant_Group_WebView_SEO_PB_Theme",
  widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
  style: {},
  collectionId: "84124",
};