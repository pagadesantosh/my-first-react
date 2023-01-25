import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestrauntCard from "./RestrauntCard";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetRestarunt from "../utils/useGetRestarunt";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState(""); // Hooks : Just a normal function to create state variable
  const restarunts = useGetRestarunt(searchText);
  const isOnline = useOnline();

  if(!isOnline) {
    return <h1>Offline, please check your internet connection!</h1>
  }

  return restarunts.length === 0 ? (
    <Shimmer />
  ) : (
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
          return (
            <div className="col-lg-4 col-md-6 col-12" key={restarunt.data.id}>
              <Link to={"/Restraurant/" + restarunt.data.id}>
                <RestrauntCard {...restarunt.data} />;
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
