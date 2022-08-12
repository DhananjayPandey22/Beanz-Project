import React, { useEffect, useState } from "react";
import LinkImage from "../components/linkImage";
import "../componentStyle/link.css";
import getData from "../content/getData.js";

const ShopCoffee = () => {
  const [beanzComponent, setBeanzComponent] = useState(null);
  const { REACT_APP_PORT, REACT_APP_API, REACT_APP_SHOP } = process.env;

  useEffect(() => {
    const beanzComponentData = getData(
      REACT_APP_PORT,
      REACT_APP_API,
      REACT_APP_SHOP
    );
    beanzComponentData.then((v) => {
      setBeanzComponent(v);
    });
  }, []);

  return (
    <>
      {beanzComponent !== null ? (
        <div>
          <LinkImage beanz={beanzComponent.linkimage} />
          hi
        </div>
      ) : (
        "Data not found"
      )}
    </>
  );
};

export default ShopCoffee;
