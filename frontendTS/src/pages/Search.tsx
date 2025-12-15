import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function Search() {
  const { state } = useLocation();
  // console.log(state);
  const [searchParam] = useSearchParams();
  const cate = searchParam.get("category");
  const price = searchParam.get("price");
  return (
    <div className="Search w-[80%] mx-auto my-4 p-4 border-2 border-blue-500 rounded">
      <h2>You are inside the Search Component</h2>
      <h4>URL: localhost:3000/services/search</h4>
      <p>{state?.name}</p>
      <p>{state?.age}</p>
      <p>{cate}</p>
      <p>{price}</p>
    </div>
  );
}

export default Search;
