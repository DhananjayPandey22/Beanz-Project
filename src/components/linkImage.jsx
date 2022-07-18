import React, { Component } from "react";

class LinkImage extends Component {
  state = {};
  render() {
    return (
      <div className="LIcontainer">
        <img className="Llinkimg" src="https://picsum.photos/1200/600" />
        <div className="Ltextlink2">
          <h1>{this.props.title}</h1>
          <p className="Llinkpara">{this.props.description}</p>
          <a href={this.props.linkURL} target="blank">
            <button className="Llinkbutton">{this.props.buttonTitle}</button>
          </a>
        </div>
      </div>
    );
  }
}

export default LinkImage;
