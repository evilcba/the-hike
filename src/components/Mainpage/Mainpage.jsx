import React from "react";
import { Link } from "react-router-dom";
const Mainpage = () => {
  return (
    <>
      <div>
        <div>
          <p className="text-center   font-bold">Enjoy Wonderful</p>
          <p className="text-center font-bold">Experience on Winter</p>
        </div>
        <div>
          <p className="text-center font-extralight text-xs">
            Find popular destination and staycation
          </p>
          <p className="text-center font-extralight text-xs">
            around the world
          </p>
        </div>
        <div className="flex justify-center space-x-4 mr-4 mt-2">
          <button className="rounded-lg p-1 ml-2 bg-teal-700 text-white ">
            Be Our Guests{" "}
          </button>
          <a href="">Need a help?</a>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
