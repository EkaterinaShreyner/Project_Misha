import React from "react";
import {Card } from "react-bulma-components";

import './Card.css'

function RenderCard(text, crossedPrices, actualPrices, ImageCards) {
  return (
    <Card className="card-promo">
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
    </Card>
  );
}

export default RenderCard;