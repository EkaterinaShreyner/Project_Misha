import React from 'react'
import './Main.css'

import RenderIdeaInput from '../IdeaInput/IdeaInput';
import CardIdeaList from '../CardIdeaList/CardIdeaList';

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
      <RenderIdeaInput />
      <CardIdeaList />
    </main>
    
  )
}

export default Main;
