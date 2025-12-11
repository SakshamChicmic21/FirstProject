import React, { createContext, useState } from "react";
import ChildA from "./ChildA";

// step 1: create context
// const UserContext = createContext<{name:string;age:number}>({name:"",age:0});
// setp 2: warp all the children inside a provider
// setp 3: pass value
// step 4: consume k andar kaake consume karlo

const TheamContext = createContext<{ theme: string; setTheme: (theme: string) => void }>({ theme: "light", setTheme: () => {} });
function UseContextHook() {
  const [theme, setTheme ] = useState<string>("light");
  return (
    <TheamContext.Provider value={{theme,setTheme}}>
      <div id="container" style={{ backgroundColor:theme === "light" ? "beige" : "black", color:theme === "light" ? "#000" : "#fff", padding:"40px" }}>
        {/* <h1>UseContext Hook</h1> */}
        <ChildA />
      </div>
    </TheamContext.Provider>
    // <div>
    //     <h1>UseContext Hook</h1>
    //     <UserContext.Provider value={{name:"John",age:30}}>
    //         {/* children components */}
    //         <ChildA />
    //     </UserContext.Provider>
    // </div>
  );
}

export default UseContextHook;
// export {UserContext};
export { TheamContext };

// Learning purpose only
// To create useContext hook we use
// 1. create context using createContext method
// 2. provide the context value using Context.Provider (children wrapped inside provider will have access to context value)
// 3. consume the context value using useContext hook (use by children components)
// Note : useContext hook only works with functional components not with class components
