import React, { useState } from "react";
import "./frontCard.scss";

const FrontCard = ({cardNumber, name, month, year, cvc}) => {

  return (
    <>
      <div className="card">
        <div className="card__front">
          <div className="logo">
            <div className="big-logo"></div>
            <div className="small-logo"></div>
          </div>
          <div className="number">{cardNumber}</div>
          <div className="name-exp">
            <div className="name">{name}</div>
            <div className="expire">
              {month}/{year}
            </div>
          </div>
        </div>
				<div className="card__back">
					<div className="cvc">{cvc}</div>
				</div>
      </div>
    </>
  );
};


export default FrontCard;
