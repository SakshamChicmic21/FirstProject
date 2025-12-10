// import "./App.css";
import { useState } from "react";
import Tours from "./components/Tours.tsx";
import data from "./data.ts";


function TourApp() {
  const [tours, setTours] = useState(data);

  function removeTour(id: number){ 
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours); 
    console.log(newTours.pop());
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
      <h2>Tour site</h2>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default TourApp;


