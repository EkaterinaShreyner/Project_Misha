import React from "react";
import { useState,  } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Columns, Modal } from "react-bulma-components";
import './IdeaInput.css'
import RenderProgress from "../Progress/Progress"

function RenderIdeaInput() {
  const [ideaValue, setIdeaValue] = useState("");
  const [isShowModal, setShowModal] = useState(false)
  const navigate = useNavigate();

  function handleCheckIdea(e) {
    e.preventDefault();
    setShowModal(true);
    console.log("isShowModal:", isShowModal)
    // navigate('./progress-bar', { replace: true })
  }

  function RenderModalProgress() {
    return (
      <Modal 
        show={isShowModal} 
        onClose={() => setShowModal(false)} 
        closeOnEsc="true"
        closeOnBlur="true"
        className="cardModal">
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title textColor="success">
              Оценка вашей идеи
            </Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            {RenderProgress()}
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    );
  }

  const placeholderIdea = ideaValue === "" ? "" : "Опиши свою идею";
  return (
    <div>
      <RenderModalProgress/>
      <span>
        {placeholderIdea}
      </span>
      <Columns>
        <Columns.Column>
          <input 
            className="main__input input" 
            placeholder={"Опиши свою идею"}
            size={9} 
            value={ideaValue} 
            onChange={(e) => setIdeaValue(e.target.value)}>
          </input>
        </Columns.Column>
        <Columns.Column size={3}>
          <Button
            type="submit"
            disabled={ideaValue === "" ? true : false}
            color="info"
            className="noLeftBottomRadius"
            onClick={handleCheckIdea}
          >
              Оценить
          </Button>
        </Columns.Column>
      </Columns>
    </div>
  );
}

export default RenderIdeaInput;