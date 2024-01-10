import React from "react";
import { useState, useEffect } from "react";
import './Progress.css'
import { Button, Columns, Card } from "react-bulma-components";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

function RenderProgress() {
  const navigate = useNavigate();
  const [chance, setChance] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setChance(randomNumber)
  });

  // function generateRandomNumber() {
  //   const randomNumber = Math.floor(Math.random() * 100) + 1;
  //   setChance(randomNumber)
  // }

  return (
    <Columns>
      <Columns.Column>
          <p>
            ВЕРОЯТНОСТЬ УСПЕХА
          </p>
        {ProgressBar(chance)}
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
            <Button
              color="black"
              className="noLeftBottomRadius"
              onClick={() => navigate('/promo', { replace: true })}>
                Узнать
            </Button>
          </div>
        </Card>
      </Columns.Column>
    </Columns>
  );
}

export default RenderProgress;