import React from "react";
import "../App.css";
// function Loading() {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
//       <div className="loader"></div>
//     </div>
//   );
// }

// export default Loading;
function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop">
      <div className="loader"></div>
    </div>
  );
}
export default Loading;