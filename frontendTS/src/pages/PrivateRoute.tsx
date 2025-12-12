import React, { type ReactNode } from "react";
import { Navigate} from "react-router-dom";
interface PropChild{
    children:ReactNode
}
function PrivateRoute({children}: PropChild) {
  const isAuthenticated = localStorage.getItem("authToken"); 
//   const isAuthenticated = false;
  console.log(isAuthenticated);
  return (isAuthenticated) ? children: <Navigate to="/login"/>;
}

export default PrivateRoute;
