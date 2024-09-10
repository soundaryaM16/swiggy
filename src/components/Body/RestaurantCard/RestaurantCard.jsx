import React from "react";
import "./RestaurantCard.css";
import { CDN_URL } from "../../Constants/utils";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = props.resData.info;
  const { deliveryTime } = props.resData.info.sla;
  return (
    <div className="card">
      <div className="card-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />

        <h4>Name:{name}</h4>
        <h6>Cuisines:{cuisines.join(", ")}</h6>
        <h5>Avgrating:{avgRating}</h5>
        <h5>Delivey Time:{deliveryTime}</h5>
      </div>
    </div>
  );
};
export default RestaurantCard;
