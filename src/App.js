import React, { useEffect, useState } from "react";
import axios from "axios";
import LinkImage from "./components/linkImage";
import "./componentStyle/link.css";
import Espresso from "./components/espresso";
import "./componentStyle/espresso.css";
import EmailReg from "./components/emailReg";
import CardComponent from "./components/cardComponent";
import "./componentStyle/cComponent.css";
import Lowdown from "./components/lowdown";
import "./componentStyle/lowdown.css";
import FooterBnz from "./components/footerBnz";
import "./componentStyle/footerBnz.css";
import SliderBnz from "./components/sliderBnz";
import TopNav from "./components/topNav";
import "./componentStyle/topnav.css";
import "./componentStyle/emailreg.css";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [beanzComponent, setBeanzComponent] = useState();

  //const baseurl = "/";

  useEffect(() => {
    axios
      .get(
        `http://localhost:4503/AemProject/bin/api/content/v41?page=home-page`
      )
      .then((response) => {
        // console.log(response);
        // console.log(data);
        setBeanzComponent(response.data);

        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TopNav />
      <LinkImage
        title={beanzComponent.linkimage["jcr:title"]}
        linkURL={beanzComponent.linkimage.linkURL}
        buttonTitle={beanzComponent.linkimage["jcr:buttontitle"]}
        description={beanzComponent.linkimage["jcr:description"]}
      />

      <h1 style={{ textAlign: "center" }}>How It Works</h1>

      <CardComponent beanz={beanzComponent.cardcomponent.multifield} />

      <Espresso
        beanz={beanzComponent.espresso}
        // subtitle={beanzComponent.espresso["jcr:subtitle"]}
        // description={beanzComponent.espresso["jcr:description"]}
        // subtitle2={beanzComponent.espresso["jcr:subtitle2"]}
        // description2={beanzComponent.espresso["jcr:description2"]}
        // linkURL={beanzComponent.espresso.linkURL}
      />

      <Lowdown beanz={beanzComponent.lowdown} />

      <EmailReg beanz={beanzComponent["email-reg"]} />

      <FooterBnz />
    </div>
  );
}

export default App;
