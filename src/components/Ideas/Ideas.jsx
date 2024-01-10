import React from 'react';
import './Ideas.css';
import CardIdeaList from '../CardIdeaList/CardIdeaList';

function Ideas() {
  return (
    <div className="ideas">
      <p className="ideas__title">Создание платформы для персонализированных образовательных путеводителей. Пользователи могут вводить свои интересы, уровень знаний и цели, а система, используя искусственный интеллект, предоставляет индивидуализированный план обучения с рекомендациями курсов, проектов и ресурсов.
      </p>
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
      <CardIdeaList />
    </div>
  )
}

export default Ideas;
