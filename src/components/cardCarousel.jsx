import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="cContain">
      <Carousel.Item className="ccContain">
        <div>
          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="ccContain">
          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="ccContain">
          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>

          <div className="ccItem">
            <img
              src="https://www.beanz.com/content/dam/marketplace/us/roasting-brands/roasters/BeanzUS_Methodical_logo_200x200.jpg"
              alt=""
            />
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
