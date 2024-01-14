import React from "react";
import { useState } from "react";
import CardPromo from "../CardPromo/CardPromo";
import Img1 from '../../images/pic1.svg'
import Img2 from '../../images/pic2.svg'
import Img3 from '../../images/pic3.svg'
import Img4 from '../../images/pic4.svg'
import Img5 from '../../images/pic5.svg'

import './CardsPromoList.css'
import FormIdea from "../FormIdea/FormIdea";

function CardsPromoList() {
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
    <CardPromo
      key={index}
      text={text}
      crossedPrices={crossedPrices[index]}
      actualPrices={actualPrices[index]}
      ImageCards={ImageCards[index]}
    />
  ));

  return (
    <div className="promo">
      <p className="promo__title">
        Выбери промокод на какой из наших продуктов тебе прислать:
      </p>
      
      <div className="promo__cards-list">
        {renderedCards}
      </div>
      <span className="main__label">
        {emailPlaceholder}
      </span>
      <FormIdea
        placeholder="почта"
        value={emailValue}
        // onCheckIdea={handleCheckIdea}
        onChangeInput={(e) => setEmailValue(e.target.value)}
      ></FormIdea>

      {/* <Columns>
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
      </Columns> */}
    </div>
  );
}

export default CardsPromoList;