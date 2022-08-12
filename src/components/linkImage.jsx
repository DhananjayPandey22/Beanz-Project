import React, { Component } from "react";

class LinkImage extends Component {
  state = {};
  render() {
    return (
      <div className="LIcontainer">
        <img
          className="Llinkimg"
          src={`${process.env.REACT_APP_PORT}${this.props.beanz.imageURL}`}
        />
        <div className="Ltextlink2">
          <h1 className="my-3">{this.props.beanz["jcr:title"]}</h1>
          <p className="Llinkpara mx-2">
            {this.props.beanz["jcr:description"]}
          </p>
          <a href={this.props.beanz.linkURL} target="blank">
            <button className="Llinkbutton">
              {this.props.beanz["jcr:buttontitle"]}
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default LinkImage;
