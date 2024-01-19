import React, { useEffect, useState } from 'react';

import './Ideas.css';
import CardIdeaList from '../CardIdeaList/CardIdeaList';
import CardIdea from '../CardIdea/CardIdea';
import { Link } from 'react-router-dom';
import * as mainApi from "../../utils/MainApi";



function Ideas(props) {
  const [randomCardIdea, setRandomCardIdea] = useState({});

  useEffect(() => {
      mainApi.getCards()
        .then((cards) => {
          console.log(cards)
          // props.setCardIdeaList(cards)
          // console.log(props.cardIdeaList)
          const randomIndex = Math.floor(Math.random() * cards.length);
          const randomCard = cards[randomIndex];
          console.log(randomIndex)
          console.log(randomCard)
          setRandomCardIdea(randomCard)
          console.log(randomCard)
        })
        .catch((err) => console.log(err))

  }, [])

  return (
    <div className="ideas">
      <p className="ideas__title">{randomCardIdea.title}</p>
      <div className="ideas__buttons">
        <button
          className="ideas__button_type ideas__button_type_like"
          onClick={() => console.log('like')}
        >  
        </button>
        <button
          className="ideas__button_type ideas__button_type_dislike"
          onClick={() => console.log('dislike')}
        >  
        </button>
      </div>
      <CardIdeaList cardIdeaList={props.cardIdeaList}/>
      <Link to="/" className="ideas__nav-back">Вернуться к началу</Link>
    </div>
  )
}

export default Ideas;
