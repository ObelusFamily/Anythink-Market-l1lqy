import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <form className="form-inline justify-content-center">
          <span id="get-part">A place to get </span>
          <div className="form-group">
            <input id="search-box" type="text" className="form-control" placeholder="What is it that you truly desire?" ></input>
            <i className="ion-search"></i>
          </div>
          <span> the cool stuff.</span>
        </form>
      </div>
    </div>
  );
};

export default Banner;
