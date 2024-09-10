import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import "./RestaurantList.css";
import { image_url } from "../Constants/utils";

const RestaurantList = () => {
  const [resInfo, setResInfo] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.66020&lng=78.15320&restaurantId=" +
        resId
    );
    const json = await res.json();
    setResInfo(json);
    console.log(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { deliveryTime } = resInfo?.data?.cards[2]?.card?.card?.info?.sla;
  const menuCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const toggleSection = (index) => {
    setOpenSections((prevState) => ({
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="restaurant-list">
      <h2>{name}</h2>
      <div id="list" className="card">
        <h5>{cuisines.join(", ")}</h5>
        <h5 className="rating">★ {avgRating}</h5>
        <h5 className="delivery-time">Delivery Time: {deliveryTime} mins</h5>
        <br></br>
        <p>Order above ₹149 for discounted delivery fee</p>
      </div>

      {menuCards?.slice(1, 10).map((menuCategory, index) => {
        const sectionTitle = menuCategory?.card?.card?.title;
        const itemCards = menuCategory?.card?.card?.itemCards;
        // console.log(sectionTitle)

        return (
          <div key={index} className="menu-section">
            <div
              className="accordion-toggle"
              onClick={() => toggleSection(index)}
            >
              <span className="accordion-title">{sectionTitle}</span>
              <span className="accordion-icon">
                {openSections[index] ? "▲" : "▼"}
              </span>
            </div>

            {openSections[index] && itemCards && (
              <div className="accordion-content open">
                <ul>
                  {itemCards.map((item) => (
                    <li key={item.card.info.id} className="menu-item">
                      <div className="item-details">
                        <h4>
                          {item.card.info.name} - ₹{item.card.info.price / 100}
                        </h4>
                        <p>{item.card.info.description}</p>
                      </div>
                      <img
                        className="item-image"
                        l
                        src={image_url + item.card.info.imageId}
                        alt={item.card.info.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantList;
