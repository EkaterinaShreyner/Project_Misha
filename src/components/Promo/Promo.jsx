import React, { useEffect } from "react";
import { useState } from "react";
import CardPromo from "../CardPromo/CardPromo";
import { promoData } from "../../utils/constants";

import './Promo.css'
import FormIdea from "../FormIdea/FormIdea";
import { Link } from "react-router-dom";
import ModalConfirm from "../ModalConfirm/ModalConfirm";

function Promo() {
  const [emailValue, setEmailValue] = useState("");
  const [showModalConfirm, setShowModalConfirm] = useState(false);

  // useEffect(() => window.scrollTo(0, 2000), []);

  // const emailPlaceholder = emailValue === "" ? "" : "Напиши свою почту, а мы пришлем результаты обработки твоей идеи нашим ИИ:";
  const emailPlaceholder = "Напиши свою почту, а мы пришлем результаты обработки твоей идеи нашим ИИ:";
  const isHiddenMobile = () => {
    return window.innerWidth <= 1439;
  }

  const handleShowModal = () => {
    setTimeout(() => {
      setShowModalConfirm(true)
    }, 300);
    setTimeout(() => {
      setShowModalConfirm(false)
    }, 2000);
  };



  const renderedCards = promoData.map((data, index) => (
    <CardPromo
      key={index}
      id={data.id}
      textStart={data.textStart}
      textBold={data.textBold}
      textFor={data.textFor}
      textEnd={data.textEnd}
      crossedPrices={data.crossedPrice}
      actualPrices={data.actualPrice}
      ImageCards={isHiddenMobile() ? data.imageMobile : data.image }
    />
  ));

  return (
    <>
      <div className="promo">
        <p className="promo__title">
          Выбери промокод на какой из наших продуктов тебе прислать:
        </p>

        <div className="promo__cards-list">
          {renderedCards}
        </div>
        <span className="promo__label">
          {emailPlaceholder}
        </span>
        <FormIdea
          modal={handleShowModal}
          placeholder="Email@gmail.com"
          value={emailValue}
          onChangeInput={(e) => setEmailValue(e.target.value)}
        ></FormIdea>
        <Link to="/" className="ideas__nav-back">Вернуться к началу</Link>
      </div>
      {showModalConfirm && <ModalConfirm modal={showModalConfirm} closeModal={() => setShowModalConfirm(false)}/>}
    </>
  );
}

export default Promo;