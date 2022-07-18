import React, { Component } from "react";
class Lowdown extends Component {
  state = {};
  render() {
    return (
      <div class="ldcontainer">
        <h1>{this.props.beanz["jcr:title"]}</h1>

        <img class="ldimage" src="https://picsum.photos/1140/320" />

        <div class="ldtext">
          <div class="ldsubtitle">
            <h2>{this.props.beanz["jcr:subtitle"]}</h2>
            <p>{this.props.beanz["jcr:description"]}</p>
          </div>

          <div class="ldsubtitle2">
            <h2>{this.props.beanz["jcr:subtitle2"]}</h2>
            <p>{this.props.beanz["jcr:description2"]}</p>
          </div>
        </div>
        <div class="ldbuttondiv">
          <a href="{this.props.beanz.linkURL}" target="blank">
            <button class="ldbutton">Learn more about coffee</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Lowdown;
