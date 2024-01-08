import React from "react";
import { useState,  } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Columns } from "react-bulma-components";

import './IdeaInput.css'

function RenderIdeaInput() {
  const [ideaValue, setIdeaValue] = useState("");
  const navigate = useNavigate();

  function handleCheckIdea() {
    navigate('./progress-bar', { replace: true })
  }
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
          <Button
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