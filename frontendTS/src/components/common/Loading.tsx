import React from "react";
import "../../App.css";
function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-3xl">
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
