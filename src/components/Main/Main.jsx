import React from 'react'
import './Main.css'
import '../Ideas/Ideas.css';

import IdeaInput from '../IdeaInput/IdeaInput';
import CardIdeaList from '../CardIdeaList/CardIdeaList';

function Main(props) {
  return (
    <main className="main">
      <h1 className="main__title">Lorem Ipsum is simply dummy text <span className="main__title-span">of the printing </span>and typesetting industry.</h1>
      <IdeaInput isShowModal={props.isShowModal} setShowModal={props.setShowModal}/>
      <CardIdeaList cardIdeaList={props.cardIdeaList}/>
    </main>
    
  )
}

export default Main;
