import React from 'react'
import './Main.css'

import RenderIdeaInput from '../IdeaInput/IdeaInput';
import CardIdeaList from '../CardIdeaList/CardIdeaList';

function Main() {
  return (
    <main className="main">
      <div className="main__title">
        <span>Lorem Ipsum is simply dummy text </span>
        <span className='textHighlight'>of the printing</span>
        <p>and typesetting industry.</p>
      </div>
      <RenderIdeaInput />
      <CardIdeaList />
    </main>
    
  )
}

export default Main;
