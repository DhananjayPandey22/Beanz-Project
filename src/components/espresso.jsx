import React, { Component } from "react";

class Espresso extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid mt-5 mb-5 yfbmaincon">
        <h2 className="beanheading">{this.props.beanz["jcr:title"]}</h2>
        <div className="row">
          <div className="col-sm-3.5 ml-4">
            <img
              className="beanimgleft w-100"
              src={this.props.beanz.imageURL}
            />
          </div>
          <div className="col-sm-5 row yfbcenterdiv">
            <div className="col-sm-5">
              <h4 className="yfbtitle">{this.props.beanz["jcr:subtitle"]}</h4>
              <p className="favpara">{this.props.beanz["jcr:description"]}</p>
            </div>
            <div className="col-sm-2">
              <h1 className="favcenter">OR</h1>
            </div>
            <div className="col-sm-5">
              <h4 className="yfbtitle">{this.props.beanz["jcr:subtitle2"]}</h4>
              <p className="favpara">{this.props.beanz["jcr:description2"]}</p>
            </div>
          </div>
          <div className="col-sm-3.5">
            <img
              className="beanimgright w-100"
              src={this.props.beanz.image1URL}
            />
          </div>
        </div>
        <div className="beanbtndiv">
          <a href={this.props.beanz.linkURL} target="blank">
            <button className="beanbtn">Take our Quiz</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Espresso;
