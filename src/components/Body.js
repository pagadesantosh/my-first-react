import React, { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import RestrauntCard from "./RestrauntCard";

function filterData(searchText, restarunts) {
  return restarunts.filter((restarunt) => restarunt.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
 }

const Body = () => {
  const [searchText, setSearchText] = useState(""); // Hooks : Just a normal function to create state variable
  const [restarunts, setRestarunt] = useState([]);
  useEffect(() => {
    //Callback function
    getRestraunts();
  }, [searchText]); // [] known as dependecy function or dependncy array
  // id dont want to dependent on anything set []

  async function getRestraunts() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5142377&lng=73.9256948&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    setRestarunt(json?.data?.cards[2]?.data?.data?.cards); // optinal chaining 
  }

  return (restarunts.length === 0) ? <Shimmer/> : (

    <div className="container">
      <div className="row">
        <div className="searc-container row pb-2 pt-2">
          <div className="col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
          </div>
          <div className="col-lg-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                const data = filterData(searchText, restarunts);
                setRestarunt(data);
              }}
            >
              Search
            </button>
          </div>
        </div>
        {restarunts.map((restarunt) => {
          return <RestrauntCard {...restarunt.data} key={restarunt.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;