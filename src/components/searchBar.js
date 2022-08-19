import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import React from "react";

function SearchBar(props) {
  const [searchTearm, setSearchTerm] = useState("");

  const beanz = [props.beanz];

  var obj = [];

  Object.keys(beanz).map((item) => {
    obj = beanz[item];
  });

  return (
    <div>
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
        <BsSearch className="seicon" />
      </div>
      <ul className="flexing">
        {Object.keys(obj)
          .filter((oneItem) => {
            if (searchTearm == "") {
              return oneItem;
            } else if (
              obj[oneItem].title
                .toLowerCase()
                .includes(searchTearm.toLowerCase())
            ) {
              return oneItem;
            }
          })
          .map((oneItem) => (
            <div key={obj[oneItem].title} className="cccont">
              <img
                className="ccImage"
                src={`${process.env.REACT_APP_PORT}${obj[oneItem].linkURL}`}
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
export default SearchBar;
