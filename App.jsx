import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import About from "./src/components/About/About";
import Cart from "./src/components/Cart/Cart";
import Footer from "./src/components/Footer/Footer";
import RestaurantList from "./src/components/RestaurantList/RestaurantList";
import RestaurantCard from "./src/components/Body/RestaurantCard/RestaurantCard";
import Whatsonyourmind from "./src/components/Body/WatsOnYourMind/WatsOnYourMind";
import MultiStateClass from "./src/components/UserComps/UserComps";
import MultiStateFunctional from "./src/components/UserComps/User";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/" element={<Body />} />

          <Route path="/RestaurantList/:resId" element={<RestaurantList />} />

          <Route path="/Watsonyourmind" element={<Whatsonyourmind />} />
          <Route path="/user" element={<MultiStateClass />} />
          <Route path="/userComps" element={<MultiStateFunctional />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
