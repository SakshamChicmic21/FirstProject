import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Login/LoginButton";
import SignupButton from "../Signup/SignupButton";
function Navbar() {
  return (
    <div className="px-6 py-4 flex bg-purple-400 justify-between">
      <ul className="text-[1.2rem] justify-center items-center flex gap-4 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        {/* <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li> */}
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-4">
        <LoginButton />
        <SignupButton />
      </div>
    </div>
  );
}

export default Navbar;
