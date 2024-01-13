import React from 'react';
import './FormIdea.css';
import { Button, Form } from "react-bulma-components";

function FormIdea(props) {

  function onCheckIdea(e) {
    props.onCheckIdea(e)
  }
  function onChangeInput(e) {
    props.onChangeInput(e)
  }

  return (
      <Form.Field kind="addons" align="end" className="main__form">
        <Form.Input
          onChange={onChangeInput}
          value={props.ideaValue}
          className="main__input"
          size={9}
          placeholder={props.placeholder}
        />
        <Button
          className="main__button-submit"
          type="submit"
          disabled={props.ideaValue === "" ? true : false}
          onClick={onCheckIdea}
        >
          Оценить
        </Button>
      </Form.Field>
  )
}

export default FormIdea;
