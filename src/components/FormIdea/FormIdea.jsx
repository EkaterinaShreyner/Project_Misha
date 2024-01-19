import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FormIdea.css';
import { Button, Form } from "react-bulma-components";

function FormIdea(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isValidEmail, setIsValidEmail] = useState(true);

  function onCheckIdea(e) {
    props.onCheckIdea(e)
  }
  function onChangeInput(e) {
    props.onChangeInput(e)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(props.value));
  }

  return (
    <form>
      <Form.Field kind="addons" align="end" className="main__form">
        <Form.Input
          onChange={onChangeInput}
          value={props.value}
          className="main__input"
          style={!isValidEmail ? { borderBottomColor: 'red' } : {}}
          size={9}
          minLength={2}
          placeholder={props.placeholder}
        />
        {(currentPath !== '/' && !isValidEmail) && 
        <Form.Help color="danger" className="is-hidden-desktop">Невалидная почта</Form.Help>}
        <Button
          className="main__button-submit"
          type="submit"
          disabled={props.value === "" || !isValidEmail ? true : false}
          onClick={onCheckIdea}
        >
          {currentPath === '/'? "Оценить" : "Прислать"}
        </Button>
      </Form.Field>
      {(currentPath !== '/' && !isValidEmail) && 
        <Form.Help color="danger" className="is-hidden-mobile">Невалидная почта</Form.Help>}
    </form>
  )
}

export default FormIdea;
