import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";

class CardSlider extends Component {
  state = {};
  render() {
    const beanz = [this.props.beanz];

    var obj3 = Object.values(beanz[0]);

    let len = obj3.length;
    let itemsArray = [];
    let newArray = [];
    obj3.map((v, i) => {
      if (i === 0) {
        newArray.push(v);
      } else if (i % 8 !== 0 && i !== len - 1) {
        newArray.push(v);
      } else if (i % 8 !== 0 && i === len - 1) {
        newArray.push(v);

        itemsArray.push(newArray);
      } else if (i % 8 == 0 && i === len - 1) {
        itemsArray.push(newArray);

        newArray = [];

        newArray.push(v);
        itemsArray.push(newArray);
      } else {
        itemsArray.push(newArray);

        newArray = [];

        newArray.push(v);
      }
    });

    return itemsArray.length != 0 ? (
      <>
        <Carousel interval={null} className="csContainer">
          {itemsArray.map((oneItem) => (
            <Carousel.Item className="csContain justify-content-center align-item-center">
              {oneItem.map((newItem) => {
                return (
                  <div className="csItem p-4 ">
                    <img
                      className="d-block mx-auto"
                      src={newItem.linkURL}
                      width="150px"
                      alt="First slide"
                    />
                    <p className="text-warning text-bold"> {newItem.title} </p>

                    <p>{newItem.subtitle}</p>
                  </div>
                );
              })}
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-center">
          <a href={this.props.beanzbutton.allcardlink} target="blank">
            <button className="btn btn-info">See all roasters</button>
          </a>
        </div>
      </>
    ) : (
      "card not found"
    );
  }
}

export default CardSlider;
