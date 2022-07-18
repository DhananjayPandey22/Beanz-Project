import React, { Component } from "react";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <div class="topnav">
        <a href="">
          <img
            class="beanzlogo"
            src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/header/master/_jcr_content/root/image.coreimg.svg/1649175807319/beanz-white.svg"
          />
        </a>
        <a href="#home">Shop Coffee</a>
        <a href="#contact">Gifts</a>
        <a href="#about">Our Roasters</a>
        <a href="#about">Barista's Choice </a>
        <a href="#about">Coffee Lowdown</a>
        <a href="#about">Our Story</a>
      </div>
    );
  }
}

export default TopNav;
