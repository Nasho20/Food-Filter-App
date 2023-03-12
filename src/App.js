import React, { useState } from "react";
import Data from "./fakeData/Data";
import "./App.css";
import Card from "./Card";
import Button from "./Button";

function App() {
  const [food, setFood] = useState(Data);
  const menuFood = [...new Set(Data.map((value) => value.category))];

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-12 text-center my-3 fw-bold">Today's Menu</h1>
        <Button setFood={setFood} menuFood={menuFood} />
        <Card food={food} />
      </div>
    </div>
  );
}

export default App;
