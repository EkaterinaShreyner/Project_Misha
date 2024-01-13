import React from "react";
import { useState,  } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Columns, Form, Modal, Icon } from "react-bulma-components";
import './IdeaInput.css'
import RenderProgress from "../Progress/Progress"
import FormIdea from "../FormIdea/FormIdea";

function RenderIdeaInput() {
  const [ideaValue, setIdeaValue] = useState("");
  const [isShowModal, setShowModal] = useState(false)
  const navigate = useNavigate();
  // const { Input, Field, Control, Label } = Form;

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
        <Modal.Card className="modal__container" closeOnBlur="false">
          {/* <Modal.Card.Header>
            <Modal.Card.Title textColor="success">l
            </Modal.Card.Title>
          </Modal.Card.Header> */}
          <Modal.Card.Body className="modal__content">
            {RenderProgress(ideaValue)}
          </Modal.Card.Body>
          <Modal.Card.Footer 
            className="buttons"
            style={{justifyContent: "end"}}
          >
          </Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    );
  }

  const placeholderIdea = ideaValue === "" ? "" : "Опиши свою идею";
  return (
    <div>
      <RenderModalProgress/>
      <span className="main__label">
        {placeholderIdea}
      </span>
      {/* <Columns>
        <Columns.Column>
          <input 
            className="main__input input" 
            placeholder={"Опиши свою идею"}
            size={9} 
            value={ideaValue} 
            onChange={(e) => setIdeaValue(e.target.value)}>
          </input>
        </Columns.Column> */}
        {/* <Columns.Column size={3}>
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
        </Columns.Column> */}
      {/* </Columns> */}

      <FormIdea
        placeholder="Опиши свою идею"
        ideaValue={ideaValue}
        onCheckIdea={handleCheckIdea}
        onChangeInput={(e) => setIdeaValue(e.target.value)}
      ></FormIdea>

      {/* <Form.Field kind="addons" align="end" className="main__form">
        <Form.Input
          onChange={(e) => setIdeaValue(e.target.value)}
          value={ideaValue}
          className="main__input"
          size={9} 
          placeholder={"Опиши свою идею"}
        />
        <Button
          className="main__button-submit"
          type="submit"
          disabled={ideaValue === "" ? true : false}
          onClick={handleCheckIdea}
        >
          Оценить
        </Button>
      </Form.Field> */}
    </div>
  );
}

export default RenderIdeaInput;