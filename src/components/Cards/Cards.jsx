import React from "react";
import { useState } from "react";
import RenderCard from "../Card/Card";
import { Button, Columns } from "react-bulma-components";
import Img1 from '../../images/Vector.svg'
import Img2 from '../../images/Vector (2).svg'
import Img3 from '../../images/Vector (4).svg'
import Img4 from '../../images/Vector (5).svg'
import Img5 from '../../images/Vector (6).svg'

import './Cards.css'

function RenderCards() {
  const [emailValue, setEmailValue] = useState("");
  const emailPlaceholder = emailValue === "" ? "" : "Напиши свою почту, а мы пришлем результаты обработки твоей идеи нашим ИИ:";
  const promoText = [
    "Набор идей для бизнеса сгенерированных специально для тебя",
    "Проблемное интервью с потенциальными клиентами",
    "Подбор сотрудников для твоего бизнеса",
    "Разработка детального бизнес плана с помощью ИИ",
    "Генерация рекламных материалов с помощью ИИ"
  ];
  const crossedPrices = [
    "399",
    "8999",
    "1299",
    "14699",
    "6666"
  ];
  const actualPrices = [
    "199",
    "3899",
    "1199",
    "11999",
    "4599"
  ];

  const ImageCards = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
  ];

  const renderedCards = promoText.map((text, index) => (
    <Columns.Column key={index} size={2}>
      {RenderCard(text, crossedPrices[index], actualPrices[index], ImageCards[index])}
    </Columns.Column>
  ));
  return (
    <div>
      <span>
        Выбери промокод на какой из наших продуктов тебе прислать:
      </span>
      <Columns>
        {renderedCards}
      </Columns>
      <Columns>
        <p>
          {emailPlaceholder}
        </p>
        <Columns.Column>
          <input 
            className="input is-black" 
            placeholder={"Напиши свою почту, а мы пришлем результаты обработки твоей идеи нашим ИИ:"}
            size={9} 
            value={emailValue} 
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </Columns.Column>
        <Columns.Column size={3}>
          <Button color="primary" className="noLeftBottomRadius">
            Прислать
          </Button>
        </Columns.Column>
      </Columns>
    </div>
  );
}

export default RenderCards;