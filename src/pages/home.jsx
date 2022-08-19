import React, { useEffect, useState } from "react";

import LinkImage from "../components/linkImage";
import "../componentStyle/link.css";
import Espresso from "../components/espresso";
import "../componentStyle/espresso.css";
import EmailReg from "../components/emailReg";
import CardComponent from "../components/cardComponent";
import "../componentStyle/cComponent.css";
import Lowdown from "../components/lowdown";
import "../componentStyle/lowdown.css";

import "../componentStyle/topnav.css";
import "../componentStyle/emailreg.css";

import "../componentStyle/cardCarousel.css";
import CardSlider from "../components/cardSlider";
import getData from "../content/getData.js";

function Home() {
  const [beanzComponent, setBeanzComponent] = useState(null);
  const { REACT_APP_PORT, REACT_APP_API, REACT_APP_HOME } = process.env;

  useEffect(() => {
    const beanzComponentData = getData(
      REACT_APP_PORT,
      REACT_APP_API,
      REACT_APP_HOME
    );
    beanzComponentData.then((v) => {
      setBeanzComponent(v);
    });
  }, []);
  console.log(beanzComponent);

  return (
    <>
      {beanzComponent !== null ? (
        <div>
          <LinkImage beanz={beanzComponent.linkimage} />
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Bitter",
              fontWeight: "bold",
              marginTop: "5rem",
            }}
          >
            How It Works
          </h1>
          <CardComponent beanz={beanzComponent.cardcomponent.multifield} />
          <Espresso beanz={beanzComponent.espresso} />

          <h1
            style={{
              textAlign: "center",
              fontFamily: "Bitter",
              fontWeight: "bold",
              marginTop: "5rem",
            }}
          >
            Meet our roasters
          </h1>
          <CardSlider
            beanz={beanzComponent.cardCarousel.multifield}
            beanzbutton={beanzComponent.cardCarousel}
          />
          <Lowdown beanz={beanzComponent.lowdown} />
          <EmailReg beanz={beanzComponent["email-reg"]} />
        </div>
      ) : (
        "data not found"
      )}
    </>
  );
}

export default Home;
