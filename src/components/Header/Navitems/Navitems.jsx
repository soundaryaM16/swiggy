import React, { useState } from "react";
import "./Navitems.css";
import { Link } from "react-router-dom";

const Navitems = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const Click = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <button className="button" onClick={Click}>
          {loggedIn ? "Logout" : "Login"}
        </button>
      </ul>
    </div>
  );
};
export default Navitems;
