import React, { useState } from "react";
import Data from "./fakeData/Data";
import "./App.css";
import Card from "./Card";

function App() {
  const [food, setFood] = useState(Data);
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-12 text-center my-3 fw-bold">Today's Menu</h1>
        <Card food={food} />
      </div>
    </div>
  );
}

export default App;
