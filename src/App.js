import "./App.css";
import React from "react";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Button, Form, Icon, Box, Progress, Columns, Card } from "react-bulma-components";
import Letter from './letter.svg';

function ProgressBar() {
  const [valueProgress, setValueProgress] = useState(5);
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
        <Card className="card">
          <p>
            Но вообще-то вряд ли получится потому что…
          </p>
          <p>
            Узнать наиболее вероятные проблемы, которые у тебя возникнут по мнению нашего ИИ
          </p>
          <div className="centerContentResponsive">
            <Button color="black" className="buttonNoLeftRadius">
              Узнать  
            </Button>
          </div>
        </Card>
      </Columns.Column>
    </Columns>
  );
}

function RenderIdeaInput() {
  return (
    <input placeholder="Опиши свою идею">
    </input>
  );
}


function App() {
  return (
    <Box>
      {RenderProgress()}
    </Box>
  );
}

export default App;