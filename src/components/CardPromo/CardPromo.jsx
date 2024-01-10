import React from "react";

import './CardPromo.css'

function CardPromo(text, crossedPrices, actualPrices, ImageCards) {
  return (
    <div className="card-promo">
        <h2 className="card-promo__title">
          {text}
        </h2>
        <div className="card-promo__price">
          <s className="card-promo__price-previous">
            {crossedPrices}
          </s>
          <span className="card-promo__price-actual">
            {actualPrices}
          </span>
        </div>
        <img className="card-promo__image" src={ImageCards} alt="картинка"/>
    </div>
  );
}

export default CardPromo;