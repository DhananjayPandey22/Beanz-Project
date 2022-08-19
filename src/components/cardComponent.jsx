import React, { Component } from "react";

class CardComponent extends Component {
  state = {};
  render() {
    const beanz = [this.props.beanz];

    var obj = [];

    Object.keys(beanz).map((item) => {
      obj = beanz[item];
    });

    return (
      <div>
        <ul className="flexing">
          {Object.keys(obj).map((oneItem) => (
            <div key={obj[oneItem].title} className="cccont">
              <img
                className="ccImage"
                src={obj[oneItem].linkURL}
                width="170px"
                height="150px"
              />

              <h4 className="ccTitle"> {obj[oneItem].title} </h4>

              <p className="carddesc">{obj[oneItem].subtitle}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default CardComponent;
