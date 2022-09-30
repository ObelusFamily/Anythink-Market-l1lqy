import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" style={{ height: "0px" }} />
        <form className="form-inline justify-content-center">
          <span id="get-part">A place to get</span>
          <div className="input-group col-4">
            <input
              id="search-box"
              className="form-control py-2 border-right-0 border"
              type="search"
              placeholder="What is it that you truly desire?"
              onChange={(e) => {
                if (e.target.value.length >= 3) {
                  props.onItemsFilter(
                    e.target.value,
                    (page) => agent.Items.filterBy(e.target.value, page),
                    agent.Items.filterBy(e.target.value)
                  );
                }
              }}
            />
            <span className="input-group-append">
              <div className="input-group-text bg-white">
                <i className="ion-search"></i>
              </div>
            </span>
          </div>
          <span>the cool stuff.</span>
        </form>
      </div>
    </div>
  );
};

export default Banner;
