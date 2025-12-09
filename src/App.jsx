// import "./App.css";

// function App() {
//   return (
//     <main className="flex justify-center gap-4 flex-col min-h-screen">
//       <h1 className="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
//       <p className="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
//       <img src="https://bit.ly/3wsmzTy" alt="meme" className="mx-auto" />
//     </main>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";
import Tours from "./components/Tours.js";
import data from "./data.js";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours); 
  }

  if (tours.length === 0){
    return (
      <div className="flex justify-center items-center flex-col text-3xl gap-4 font-semibold h-[100vh]">
        <h1>No Tours left</h1>
        <button  className="bg-slate-400 rounded-lg p-2" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;


