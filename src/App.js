import "./App.css";
import React from "react";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Button, Form, Icon, Box, Progress, Columns, Card } from "react-bulma-components";
import Letter from './letter.svg';

function ProgressBar() {
  const [valueProgress, setValueProgress] = useState(60);
  const colorProgress = 
    valueProgress > 10 && valueProgress < 80
    ? "is-warning"
    : valueProgress < 10
    ? "is-danger"
    : "is-success";

  return (
    <div>
      <span>
        {valueProgress}%
      </span>
      <Progress
        class={`progress ${colorProgress}`}
        max={100}
        value={valueProgress}/>
    </div>
    
  );
}

function RenderProgress() {
  return (
    <Columns>
      <Columns.Column>
          <p>
            ВЕРОЯТНОСТЬ УСПЕХА
          </p>
        {ProgressBar()}
      </Columns.Column>
      <Columns.Column>
        <Card className="card noLeftBottomRadius">
          <p>
            Но вообще-то вряд ли получится потому что…
          </p>
          <p>
            Узнать наиболее вероятные проблемы, которые у тебя возникнут по мнению нашего ИИ
          </p>
          <div className="centerContentResponsive">
            <Button color="black" className="noLeftBottomRadius">
              Узнать  
            </Button>
          </div>
        </Card>
      </Columns.Column>
    </Columns>
  );
}

function RenderIdeaInput() {
  const [ideaValue, setIdeaValue] = useState("");
  const placeholderIdea = ideaValue === "" ? "" : "Опиши свою идею";
  return (
    <div>
      <span>
        {placeholderIdea}
      </span>
      <Columns>
        <Columns.Column>
          <input 
            class="input is-black" 
            placeholder={"Опиши свою идею"}
            size={9} 
            value={ideaValue} 
            onChange={(e) => setIdeaValue(e.target.value)}>
          </input>
        </Columns.Column>
        <Columns.Column size={3}>
          <Button color="info"  className="noLeftBottomRadius">
            Оценить
          </Button>
        </Columns.Column>
      </Columns>
    </div>
  );
}

function RenderCard(text, crossedPrices, actualPrices) {
  return (
    <Card className = "noLeftBottomRadius">
      <p>
        {text}
      </p>
      <div className="spaceBetweenContent">
        <s>
          {crossedPrices}
        </s>
        <span>
          {actualPrices}
        </span>
      </div>
    </Card>
  );
}

function RenderCards() {
  const [emailValue, setEmailValue] = useState("");
  const emailPlaceholder = emailValue === "" ? "" : "Напиши свою почту, а мы пришлем результаты обработки твоей идеи нашим ИИ:";
  const promoText = [
    "Набор идей для бизнеса сгенерированных специально для тебя",
    "Проблемное интервью с потенциальными клиентами",
    "Подбор сотрудников для твоего бизнеса",
    "Разработка детального бизнес плана с помощью ИИ",
    "Генерация рекламных материалов с помощью ИИ"
  ];
  const crossedPrices = [
    "399",
    "8999",
    "1299",
    "14699",
    "6666"
  ];
  const actualPrices = [
    "199",
    "3899",
    "1199",
    "11999",
    "4599"
  ];

  const renderedCards = promoText.map((text, index) => (
    <Columns.Column key={index} size={2}>
      {RenderCard(text, crossedPrices[index], actualPrices[index])}
    </Columns.Column>
  ));

  return (
    <div>
      <span>
        Выбери промокод на какой из наших продуктов тебе прислать:
      </span>
      <Columns>
        {renderedCards}
      </Columns>
      <Columns>
        <p>
          {emailPlaceholder}
        </p>
        <Columns.Column>
          <input 
            className="input is-black" 
            placeholder={"Напиши свою почту, а мы пришлем результаты обработки твоей идеи нашим ИИ:"}
            size={9} 
            value={emailValue} 
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </Columns.Column>
        <Columns.Column size={3}>
          <Button color="primary" className="noLeftBottomRadius">
            Прислать
          </Button>
        </Columns.Column>
      </Columns>
    </div>
  );
}

function App() {
  return (
    <Box>
      {RenderProgress()}
      {RenderIdeaInput()}
      {RenderCards()}
    </Box>
  );
}

export default App;