import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to='/login'>
      <button className="px-4 py-2 bg-yellow-300 rounded-2xl">Login</button>
    </Link>
  );
}

export default LoginButton;
