import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <div className="topnav">
        <Link style={{ borderBottom: "none" }} to="/">
          <img
            className="beanzlogo"
            src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/header/master/_jcr_content/root/image.coreimg.svg/1649175807319/beanz-white.svg"
          />
        </Link>
        <Link to="/shopCoffee">Shop Coffee</Link>
        <Link to="/gift">Gifts</Link>
        <Link to="/roasters">Our Roasters</Link>
        <Link to="#about">Barista's Choice </Link>
        <Link to="#about">Coffee Lowdown</Link>
        <Link to="#about">Our Story</Link>
      </div>
    );
  }
}

export default TopNav;
