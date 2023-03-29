import React from "react";
import { ReactComponent as MySVG } from "../Images/MySVG.svg";
import { BrowserRouter, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div >
      <div>
        <MySVG />
      </div>
      <BrowserRouter>
        <nav className="flex justify-evenly mt-2 ">
          <ul className="hover:border-b-4 border-black ">
            <Link to="/" >
              Place to Stay
            </Link>
          </ul>
          <ul className="hover:border-b-4 border-transparent transition duration-500 ease-in-out transform hover:translate-x-1">
            <Link to="/">Experience</Link>
          </ul>
          <ul className="hover:border-b-4 border-black ">
            <Link to="/">Contact</Link>
          </ul>
          <ul className="hover:border-b-4 border-black ">
            <Link to="/">BLog</Link>
          </ul>
          <ul className="hover:border-b-4 border-black ">
            <Link to="/">Pricing</Link>
          </ul>
        </nav> 
        
      </BrowserRouter>
      <div className="flex justify-end mr-4 mt-2">
      <button className="rounded-lg p-1 ml-2 bg-teal-700 text-white ">Sign up</button>
      </div>
    
    </div>
  );
};

export default Navbar;
