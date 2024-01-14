import React from 'react';
import { useLocation } from 'react-router-dom';
import './FormIdea.css';
import { Button, Form } from "react-bulma-components";

function FormIdea(props) {
  const location = useLocation();
  const currentPath = location.pathname;

  function onCheckIdea(e) {
    props.onCheckIdea(e)
  }
  function onChangeInput(e) {
    props.onChangeInput(e)
  }

  return (
    <form>
      <Form.Field kind="addons" align="end" className="main__form">
        <Form.Input
          onChange={onChangeInput}
          value={props.value}
          className="main__input"
          size={9}
          minLength={2}
          placeholder={props.placeholder}
        />
        {/* <Form.Help color="danger">This email is invalid</Form.Help> */}
        <Button
          className="main__button-submit"
          type="submit"
          disabled={props.value === "" ? true : false}
          onClick={onCheckIdea}
        >
          {currentPath === '/'? "Оценить" : "Прислать"}
        </Button>
      </Form.Field>
    </form>
  )
}

export default FormIdea;
