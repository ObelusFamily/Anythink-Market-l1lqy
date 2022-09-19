import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <form className="form-inline justify-content-center">
          <span id="get-part">A place to get</span>
             <div class="input-group col-4">
                <input id="search-box"  class="form-control py-2 border-right-0 border" type="search" placeholder="What is it that you truly desire?" />
                <span class="input-group-append">
                    <div class="input-group-text bg-white"><i class="ion-search"></i></div>
                </span>
            </div>
          <span>the cool stuff.</span>
        </form>
      </div>
    </div>
  );
};

export default Banner;
