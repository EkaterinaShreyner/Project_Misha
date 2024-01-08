import React from 'react'
import './Main.css'

import RenderIdeaInput from '../IdeaInput/IdeaInput';

function Main() {
  return (
    <main className="content">
      <h1 className="content__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
      <RenderIdeaInput/>
      {/* ДОБАВИТЬ КАРТОЧКИ */}
    </main>
    
  )
}

export default Main;
