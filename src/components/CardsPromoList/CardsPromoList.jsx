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
  const promoData = [
    {
      text: "Набор идей для бизнеса сгенерированных специально для тебя",
      crossedPrice: "399",
      actualPrice: "199",
      image: Img1,
    },
    {
      text: "Проблемное интервью с потенциальными клиентами",
      crossedPrice: "8999",
      actualPrice: "3899",
      image: Img2,
    },
    {
      text: "Подбор сотрудников для твоего бизнеса",
      crossedPrice: "1299",
      actualPrice: "1199",
      image: Img3,
    },
    {
      text: "Разработка детального бизнес плана с помощью ИИ",
      crossedPrice: "14699",
      actualPrice: "11999",
      image: Img4,
    },
    {
      text: "Генерация рекламных материалов с помощью ИИ",
      crossedPrice: "6666",
      actualPrice: "4599",
      image: Img5,
    },
  ];

  const renderedCards = promoData.map((data, index) => (
    <CardPromo
      key={index}
      text={data.text}
      crossedPrices={data.crossedPrice}
      actualPrices={data.actualPrice}
      ImageCards={data.image}
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