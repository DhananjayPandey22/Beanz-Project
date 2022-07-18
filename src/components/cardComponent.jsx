import React, { Component } from "react";

class CardComponent extends Component {
  state = {};
  render() {
    const beanz = [this.props.beanz];

    var obj = [];

    Object.keys(beanz).map((item) => {
      obj = beanz[item];

      //console.log(beanz[item]);
    });

    return (
      <div>
        <ul className="flexing">
          {Object.keys(obj).map((oneItem) => (
            <div key={obj[oneItem].title} className="cccont">
              <img
                className=""
                src={obj[oneItem].linkURL}
                width="170px"
                height="150px"
              />

              <h2> {obj[oneItem].title} </h2>

              <p className="carddesc">{obj[oneItem].subtitle}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default CardComponent;
