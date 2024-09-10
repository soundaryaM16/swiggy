import React from "react";
import Logo from "./Logo/Logo";
import NavItems from "./Navitems/Navitems";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <Logo />
      <div>
        <NavItems />
      </div>
    </div>
  );
};
export default Header;
