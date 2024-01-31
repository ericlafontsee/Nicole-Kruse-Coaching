import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="card__option col-md-4 position-relative">
      <div className="p-3 text-center">
        <h3 className="mt-3">{title}</h3>
        <p className="small">
          {text}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Card;
