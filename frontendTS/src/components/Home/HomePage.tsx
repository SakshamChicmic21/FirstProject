import React from "react";
import Button from "../common/Button";
import TourApp from "../TourSite/TourApp";
import UseMemoHook from "./UseMemoHook";
import UseCallbackHook from "./UseCallbackHook";
import ReactMemoHook from "./ReactMemoHook";
import UseContextHook from "./UseContextApiLearning/UseContextHook";
import EventApp from "./EventHandling/EventApp";
import CounterReduxApp from "./counterReduxApp";

function HomePage() {
  const data: { id: number; name: string }[] = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  function showTable() {
    let res = "";
    for (let i = 0; i < data.length; i++) {
      res += `<tr><td>${data[i].id}</td><td>${data[i].name}</td></tr>`;
    }
    const tableHTML = `<table border="1"><tr><th>ID</th><th>Name</th></tr>${res}</table>`;
    const tableContainer = document.getElementById("table-container");
    if (tableContainer) {
      tableContainer.innerHTML = tableHTML;
    }
  }
  return (
    <div className="m-4">
      <h1>Home</h1>
      <div>
        {data.map((item, index) => (
          <p key={index}>
            {item.id}: {item.name}
          </p>
        ))}
      </div>
      <div>
        <Button onClick={() => showTable()}>Show table</Button>
        <div id="table-container"></div>
      </div>
      <br />
      <Button className="border-2 border-gray-400 rounded-md bg-green-400 hover:bg-green-500 scale-3d transition-all duration-200">
        Submit
      </Button>

      
      <TourApp></TourApp>
      <br />
      <UseMemoHook />
      <br />
      <UseCallbackHook />
      <br />
      <ReactMemoHook />
      <br />
      <UseContextHook />
      <br />
      <EventApp />
      <br />
      <CounterReduxApp />



    </div>
  );
}

export default HomePage;
