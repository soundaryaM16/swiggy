import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import resList from "../../components/Constants/resList";

import "./Body.css";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import Whatsonyourmind from "./WatsOnYourMind/WatsOnYourMind";
import Footer from "../Footer/Footer";

const Body = () => {
  const [topRatedRestaurant, setTopRatedRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resBody = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await resBody.json();
    console.log(json);

    const cards = json.data?.cards;

    let resList;
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i].card;
      if (card?.card?.gridElements?.infoWithStyle?.restaurants) {
        resList = card.card.gridElements.infoWithStyle.restaurants;
        break;
      }
    }
    if (resList) {
      setTopRatedRestaurant(resList);
      setFilteredRestaurant(resList);
    } else {
      console.log("Restaurant list not found");
    }
  };

  return topRatedRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search">
        <input
          type="text"
          className="search-button"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="button-bu"
          onClick={() => {
            const filtered = topRatedRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button className="filter-button" onClick={() => {}}>
          Top rated restaurant
        </button>
      </div>

      {/* <div>
        {filteredRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div> */}
      <Whatsonyourmind />
      <hr></hr>
      <div className="cardcontent">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurantList/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
