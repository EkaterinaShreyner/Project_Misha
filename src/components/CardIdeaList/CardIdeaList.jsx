import React, { useState } from 'react';
import './CardIdeaList.css';
import CardIdea from '../CardIdea/CardIdea';
import { Link } from 'react-router-dom';
import { Columns, Button } from "react-bulma-components";

function CardIdeaList(props) {
  const [shownNewIdea, setShowNewIdea] = useState(false);
  const [showCards, setShowCards] = useState(3);

  // const bestIdeasList = [
  //   {
  //     id: 1,
  //     title: "булочная1",
  //     likes: 100,
  //     chance: "100%",
  //     dislikes: 1
  //   },
  //   {
  //     id: 2,
  //     title: "булочная2",
  //     likes: 400,
  //     chance: "40%",
  //     dislikes: 40
  //   },
  //   {
  //     id: 3,
  //     title: "булочная3",
  //     likes: 300,
  //     chance: "30%",
  //     dislikes: 30
  //   },
  //   {
  //     id: 4,
  //     title: "булочная4",
  //     likes: 200,
  //     chance: "14%",
  //     dislikes: 10
  //   },
  // ]
   
  
  // const bestIdeas = props.cardIdeaList.map((data, index) => (
  //   <CardIdea
  //     key={index}
  //     title={data.title}
  //     likes={data.likes}
  //     dislikes={data.dislikes}
  //   />
  // ));

  const bestIdeas = 
    // bestIdeasList.slice(0, showCards).map((data, index) => (
    props.cardIdeaList.slice(0, showCards).map((data, index) => (
      <CardIdea
        key={index}
        title={data.title}
        likes={data.likes}
        dislikes={data.dislikes}
        chance={data.chance}
      />
    ))
  const newIdeas = 
    // bestIdeasList.slice(0, showCards).map((data, index) => (
    props.cardIdeaList.slice(0, showCards).map((data, index) => (
      <CardIdea
        key={index}
        title={data.title}
        likes={data.likes}
        dislikes={data.dislikes}
        chance={data.chance}
      />
    ))

  const isHiddenMobile = () => {
    return window.innerWidth <= 768;
  }

  const renderButtonShowMore = 
    <Button 
      backgroundColor='black'
      textColor='white'
      style={{borderRadius:'12px 0px 12px 12px', marginTop: '15px', width: '-webkit-fill-available'}}
      onClick={() => setShowCards(prevValue => prevValue + 1)}
      > 
      Смотреть еще
    </Button>

  const renderMobile = 
  <>
    <div className="card-idea__list card-idea__list-container">
      <div className="card-idea__nav">
        <p className="card-idea__type" style={shownNewIdea ? {color: 'rgba(47, 47, 55, 0.35)'} : {}} onClick={() => {setShowNewIdea(false); setShowCards(3)}}>Лучшие идеи</p>
        <p className="card-idea__type" style={!shownNewIdea ? {color: 'rgba(47, 47, 55, 0.35)'} : {}} onClick={() => {setShowNewIdea(true); setShowCards(3)}}>Новые идеи</p>
      </div>
        {shownNewIdea ? newIdeas : bestIdeas}
    </div>
    {/* {showCards !== bestIdeasList.length && renderButtonShowMore} */}
    {showCards !== props.cardIdeaList.length && renderButtonShowMore}
  </>
  const renderDesktop =
    // <Columns>
    //   <Columns.Column className="card-idea__list-container">
    //     <p className="card-idea__type">Лучшие идеи</p>
    //     {bestIdeas}
    //   </Columns.Column>
    //   <Columns.Column className="card-idea__list-container">
    //     <p className="card-idea__type">Новые идеи</p>
    //     {newIdeas}
    //   </Columns.Column>
    // </Columns>
  
    <div className="card-idea__list">
      <div className="card-idea__list-container">
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
      {!isHiddenMobile() ? renderDesktop : renderMobile}
    </>
  )
}

export default CardIdeaList;

