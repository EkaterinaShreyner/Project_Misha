import React from "react";
import { useState } from "react";

import './CardPromo.css'

function CardPromo({text, crossedPrices, actualPrices, ImageCards}) {
  const [checkmark, setCheckMark] = useState(false);

  return (
    <div className="card-pro">
      <div className="card-promo" onClick={() => setCheckMark(!checkmark)}>
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
      {/* <div className="card-promo__option"></div> */}
      {checkmark && <div className="card-promo__option"></div>}
    </div>
  );
}

export default CardPromo;