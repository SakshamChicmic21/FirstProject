import React, { useContext } from "react";
// import { UserContext } from './UseContextHook';
import { TheamContext } from "./UseContextHook";
import Button from "../../common/Button";

function ChildC() {
  const { theme, setTheme } = useContext(TheamContext);
  // function handleClick() {
  //     setTheme(theme === "light" ? "dark" : "light");
  // }
  return (
    <div>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme to {theme === "light" ? "Dark" : "Light"}
      </Button>
      <h2>Current Theme: {theme}</h2>
    </div>
    // <div>
    //     User Name: {user.name}
    //     <br />
    //     Age: {user.age}
    // </div>
  );
}

export default ChildC;
