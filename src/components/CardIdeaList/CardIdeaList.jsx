import React, { useState } from 'react';
import './CardIdeaList.css';
import CardIdea from '../CardIdea/CardIdea';
import { Link } from 'react-router-dom';

function CardIdeaList() {
  const [shownNewIdea, setShowNewIdea] = useState(false);

  const bestIdeas = 
  <>
    <CardIdea title="Булочная"></CardIdea>
    <CardIdea title="Булочная2"></CardIdea>
    <CardIdea title="Булочная3"></CardIdea>
  </>
  const newIdeas = 
  <>
    <CardIdea title="Автомойка"></CardIdea>
    <CardIdea title="Автомойка2"></CardIdea>
    <CardIdea title="Автомойка3"></CardIdea>
  </>

  const isHiddenMobile = () => {
    return window.innerWidth <= 768;
  }

  const renderMobile = 
  <div className="card-idea__list card-idea__list-container">
    <div className="card-idea__nav">
      <p className="card-idea__type" onClick={() => setShowNewIdea(false)}>Лучшие идеи</p>
      <p className="card-idea__type" onClick={() => setShowNewIdea(true)}>Новые идеи</p>
    </div>
      {shownNewIdea? newIdeas : bestIdeas}
  </div>

  const renderDecktop =
  <div className="card-idea__list">
    <div className=" card-idea__list-container">
      <p className="card-idea__type">Лучшие идеи</p>
      {bestIdeas}
    </div>
    <div className=" card-idea__list-container">
    <p className="card-idea__type">Новые идеи</p>
      {newIdeas}
    </div>
  </div>

  return (
    <>
      {!isHiddenMobile()? renderDecktop : renderMobile}
    </>
  )
}

export default CardIdeaList;

