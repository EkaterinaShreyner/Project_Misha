import React from "react";
import { useState,  } from "react";
import { Modal } from "react-bulma-components";
import './IdeaInput.css'
import RenderProgress from "../Progress/Progress"
import FormIdea from "../FormIdea/FormIdea";

function RenderIdeaInput() {
  const [value, setValue] = useState("");
  const [isShowModal, setShowModal] = useState(false)

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
            {RenderProgress(value)}
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

  const placeholderIdea = value === "" ? "" : "Опиши свою идею";
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
            value={value} 
            onChange={(e) => setValue(e.target.value)}>
          </input>
        </Columns.Column> */}
        {/* <Columns.Column size={3}>
          <Button
            type="submit"
            style={{backgroundColor:'#8259F7', borderRadius:'12px 12px 12px 0px'}}
            textColor="white"
            disabled={value === "" ? true : false}
            className="noLeftBottomRadius"
            onClick={handleCheckIdea}
          >
              Оценить
          </Button>
        </Columns.Column> */}
      {/* </Columns> */}

      <FormIdea
        placeholder="Опиши свою идею"
        value={value}
        onCheckIdea={handleCheckIdea}
        onChangeInput={(e) => setValue(e.target.value)}
      ></FormIdea>
    </div>
  );
}

export default RenderIdeaInput;