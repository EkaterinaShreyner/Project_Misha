import React from "react";
import { useState, useEffect } from "react";
import './Progress.css'
import { Button, Columns, Card } from "react-bulma-components";
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
      <div>
        <Columns>
          <Columns.Column>
            <Card style={{width:'250px', height:'200px', backgroundColor:'#fff'}}>
              <p>Ваша идея: {ideaValue}</p>
              <p>
                ВЕРОЯТНОСТЬ УСПЕХА
              </p>
              {ProgressBar(chance)}
            </Card>
          </Columns.Column>
          <Columns.Column>
            <Card style={{width:'250px', height:'200px'}}>
              <p>
                Но вообще-то вряд ли получится потому что…
              </p>
              <p>
                Узнать наиболее вероятные проблемы, которые у тебя возникнут по мнению нашего ИИ
              </p>
            </Card>
          </Columns.Column>
        </Columns>
      </div>
  );
}

export default RenderProgress;