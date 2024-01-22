import React from 'react'
import './Main.css'
import '../Ideas/Ideas.css';

import IdeaInput from '../IdeaInput/IdeaInput';
import CardIdeaList from '../CardIdeaList/CardIdeaList';

function Main(props) {
  return (
    <main className="main">
      <h1 className="main__title">Расскажи о своей идее для бизнеса, а наш <span className="main__title-span">искусственный интеллект </span>оценит вероятность твоего успеха.</h1>
      <IdeaInput />
      <CardIdeaList />
    </main>
  )
}

export default Main;
