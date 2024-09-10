import React from "react";
import "./Logo.css";
// import { LOGO_URL } from "../../Constants/utils";

import LOGO_URL from "../../Constants/utils";
const Logo = () => {
  return (
    <div>
      <a>
        <img className="logo" src={LOGO_URL} />
      </a>
    </div>
  );
};
export default Logo;
