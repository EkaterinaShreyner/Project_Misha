import React from "react";
import { useState,  } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Columns, Level, Modal } from "react-bulma-components";
import './IdeaInput.css'
import RenderProgress from "../Progress/Progress"

function RenderIdeaInput() {
  const [ideaValue, setIdeaValue] = useState("");
  const [isShowModal, setShowModal] = useState(false)
  const navigate = useNavigate();

  function handleCheckIdea(e) {
    e.preventDefault();
    setShowModal(true);
  }

  function RenderModalProgress() {
    return (
      <Modal 
        show={isShowModal} 
        onClose={() => setShowModal(false)} 
        closeOnEsc="true"
        closeOnBlur="true"
        className="cardModal">
        <Modal.Card className="modal__container">
          <Modal.Card.Header>
            <Modal.Card.Title textColor="success">l
            </Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            {RenderProgress(ideaValue)}
          </Modal.Card.Body>
          <Modal.Card.Footer 
            className="buttons"
            style={{justifyContent: "end"}}
          >
            <Button.Group>
              <Button
                onClick={() => setShowModal(false)}>
                  Закрыть
              </Button>
              <Button
                color="black"
                onClick={() => navigate('/promo', { replace: true })}>
                  Узнать
              </Button>
            </Button.Group>
          </Modal.Card.Footer>
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
            style={{backgroundColor:'#8259F7', borderRadius:'12px 12px 12px 0px'}}
            textColor="white"
            disabled={ideaValue === "" ? true : false}
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