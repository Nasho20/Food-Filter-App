import Data from "./fakeData/Data";
import React from "react";

const Buttons = ({ setFood, menuFood }) => {
  return (
    <div className="d-flex justify-content-center">
      {menuFood.map((value, id) => {
        return (
          <button
            className="btn-dark text-white p-1 px-3 mx-3 fw-bold btn"
            key={id}
          >
            {value}
          </button>
        );
      })}
      <button
        className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
        onClick={() => setFood(Data)}
      >
        All
      </button>
    </div>
  );
};

export default Buttons;
