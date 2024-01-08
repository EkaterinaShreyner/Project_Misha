import React from "react";
import {Card } from "react-bulma-components";

import './Card.css'

function RenderCard(text, crossedPrices, actualPrices) {
  return (
    <Card className = "noLeftBottomRadius">
      <p>
        {text}
      </p>
      <div className="spaceBetweenContent">
        <s>
          {crossedPrices}
        </s>
        <span>
          {actualPrices}
        </span>
      </div>
    </Card>
  );
}

export default RenderCard;