import React from "react";
import { useState, useEffect } from "react";
import './Progress.css'
import { Columns, Card } from "react-bulma-components";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

function RenderProgress(ideaValue) {
  const navigate = useNavigate();
  const [chance, setChance] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setChance(randomNumber)
  }, []);

  return (
      <div className="check">
        <p className="check__idea">{ideaValue}</p>
        <Columns>
          <Columns.Column>
              <p className="check__title">
                ВЕРОЯТНОСТЬ УСПЕХА
              </p>
            {ProgressBar(chance)}
          </Columns.Column>
          <Columns.Column>
            <Card className="card noLeftBottomRadius">
              <p className="check__description">
                Но вообще-то вряд ли получится потому что…
              </p>
              <p className="check__know">
                Узнать наиболее вероятные проблемы, которые у тебя возникнут по мнению нашего ИИ
              </p>
            </Card>
          </Columns.Column>
        </Columns>
      </div>
  );
}

export default RenderProgress;