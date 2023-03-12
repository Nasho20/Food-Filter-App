import React from "react";

const Card = ({ food }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {food.map((value) => {
          return (
            <div
              className="col-md-4 col-sm-6 my-3 py-3 border-0"
              key={value.id}
            >
              <div className="card-img-top text-center">
                <img src={value.img} alt={value.title} className="photo w-75" />
              </div>
              <div className="card-body">
                <div className="card-title fw-bold fs-4">
                  {value.title}
                  {value.price}
                </div>
                <div className="card-text">{value.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
