import React from 'react'
import './CardIdea.css';
import Like from '../../images/like.svg'
import Dislike from '../../images/dislike.svg'

function CardIdea(props) {
  return (
    <div className="card-idea">
      <p className="card-idea__title">{props.title}</p>
      <div className="card-idea__container">
        <p className="card-idea__chance">вероятность успеха: <span className="card-idea__percent">90%</span></p>
        <div className="card-idea__rating-container">
          <p className="card-idea__rating">908<img src={Like} alt='лайк' className="card-idea__like"/></p>
          <p className="card-idea__rating">124<img src={Dislike} alt='дизлайк' className="card-idea__dislike"/></p>
        </div>
      </div>
    </div>
  )
}

export default CardIdea
