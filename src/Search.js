import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <div className="search-form">
          <form className="search-input">
            <div className="row row-no-gutters">
              <div className="col-md-6">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control searching"
                  autoFocus="on"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="submit"
                  value="SEARCH"
                  className="form-control btn btn-light search"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="submit"
                  value="Current Location"
                  className="form-control btn btn-light current-location"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
