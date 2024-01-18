import React, { useEffect } from 'react';

import './Ideas.css';
import CardIdeaList from '../CardIdeaList/CardIdeaList';
import CardIdea from '../CardIdea/CardIdea';
import { Link } from 'react-router-dom';

// const randomIndex = Math.floor(Math.random() * props.cardIdeaList.length);
// const randomCard = props.cardIdeaList[randomIndex];

function Ideas(props) {

  useEffect(() => {

  }, [])
const rrr =
  props.cardIdeaList.map((data, index) => (
    <CardIdea
      key={index}
      title={data.title}
      likes={data.likes}
      dislikes={data.dislikes}
      chance={data.chance}
    />
  ))

  return (
    <div className="ideas">
      <p className="ideas__title">{rrr.title}</p>
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
