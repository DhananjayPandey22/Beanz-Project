import React, { useEffect, useState } from "react";
import TopNav from "./components/topNav";
import "./componentStyle/topnav.css";
import "./componentStyle/emailreg.css";

import "./componentStyle/cardCarousel.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import ShopCoffee from "./pages/shopCoffee";
import OurRoasters from "./pages/ourRoasters";
import Gift from "./pages/gift";

function App() {
  return (
    <div>
      <Router>
        <TopNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shopCoffee" element={<ShopCoffee />} />
          <Route exact path="/gift" element={<Gift />} />
          <Route exact path="/roasters" element={<OurRoasters />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
