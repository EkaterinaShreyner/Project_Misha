import React from "react";
import { useState,  } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Columns, Modal } from "react-bulma-components";
import Progress from "../Progress/Progress";

import './IdeaInput.css'

function RenderIdeaInput() {
  const [ideaValue, setIdeaValue] = useState("");
  const [chance, setChance] = useState(0);
  const navigate = useNavigate();

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setChance(randomNumber)
  }

  function handleCheckIdea() {
    // navigate('./progress-bar', { replace: true })
    generateRandomNumber()
  }
  const placeholderIdea = ideaValue === "" ? "" : "Опиши свою идею";
  return (
    <div>
      <span>{chance}</span>
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
          <Button
            disabled={ideaValue === "" ? true : false}
            color="info"
            className="noLeftBottomRadius"
            onClick={handleCheckIdea}>
              Оценить
          </Button>
        </Columns.Column>
      </Columns>
    </div>
  );
}

export default RenderIdeaInput;