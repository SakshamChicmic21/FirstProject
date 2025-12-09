import React from "react";
import { Link } from "react-router-dom";

function SignupButton() {
  return (
    <Link to="/signup">
      <button className="px-4 py-2 bg-green-300 rounded-2xl">Signup</button>
    </Link>
  );
}

export default SignupButton;
