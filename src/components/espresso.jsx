import React, { Component } from "react";

class Espresso extends Component {
  state = {};
  render() {
    return (
      <div class="escontainer">
        <h1>{this.props.beanz["jcr:title"]}</h1>
        <div class="filterCoffee">
          <img class="esimagel" src="https://picsum.photos/800" />

          <div class="essubtitle">
            <h2>{this.props.beanz["jcr:subtitle"]}</h2>
            <p>{this.props.beanz["jcr:description"]}</p>
          </div>
        </div>

        <div class="estext">
          <h1>OR</h1>
        </div>

        <div class="espresso">
          <img class="esimage" src="https://picsum.photos/800"></img>
          <div class="essubtitle2">
            <h2>{this.props.beanz["jcr:subtitle"]}</h2>
            <p>{this.props.beanz["jcr:description"]}</p>
          </div>
        </div>
        <a href={this.props.beanz.linkURL} target="blank">
          <button class="esbutton">Take your Quiz</button>
        </a>
      </div>
    );
  }
}

export default Espresso;
