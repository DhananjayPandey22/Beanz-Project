import React, { Component } from "react";
class Lowdown extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="ldcontainer">
          <h1 className="lowdownTitle">{this.props.beanz["jcr:title"]}</h1>

          <img
            className="ldimage"
            src="https://breville.scene7.com/is/image/brevilleprod/coffee-101?ts=1654878496095&dpr=off"
          />

          <div className="ldtext">
            <div className="ldsubtitle">
              <h3 className="lowdownTitle">
                {this.props.beanz["jcr:subtitle"]}
              </h3>
              <p className="ldsub">{this.props.beanz["jcr:description"]}</p>
            </div>

            <div className="ldsubtitle2">
              <h3 className="lowdownTitle">
                {this.props.beanz["jcr:subtitle2"]}
              </h3>
              <p className="ldsub">{this.props.beanz["jcr:description2"]}</p>
            </div>
          </div>
        </div>
        <div className="ldbuttondiv container">
          <a href={this.props.beanz.linkURL} target="blank">
            <button className="ldbutton">Learn more about coffee</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Lowdown;
