import React, { useEffect, useState } from "react";
import LinkImage from "../components/linkImage";
import SearchBar from "../components/searchBar";
import "../componentStyle/link.css";
import getData from "../content/getData.js";
import "../componentStyle/cComponent.css";

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
          <SearchBar beanz={beanzComponent.cardcomponent.multifield} />
        </div>
      ) : (
        "Data not found"
      )}
    </>
  );
};

export default ShopCoffee;
