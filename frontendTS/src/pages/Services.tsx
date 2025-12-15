import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Services() {
  const { state } = useLocation();
  // console.log(state);
  return (
    <div className="Page">
      <h1>You are in the Services page!</h1>
      <h3>URL: localhost:3000/services</h3>
      <div className="services-nav p-4 m-4 border-2 border-green-500 flex gap-4">
        <Link to="/services/search" state={state} className="text-blue-500 ">
          Search
        </Link>
        <Link to="/services/list" className="text-blue-500 ">
          List
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Services;
