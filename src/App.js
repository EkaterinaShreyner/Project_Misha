import "./App.css";
import React from "react";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Button, Form, Icon, Box } from "react-bulma-components";
import Letter from './letter.svg';
// const { Input, Field, Control, Label } = Form;

function App() {
  const [isValue, setIsValue] = useState("");
  return (
    <Box className="App">
      <Button className="test button is-warning is-light">
        My Bulma button
      </Button>
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control>
          <Form.Input
            class="success input is-rounded"
            placeholder="введите текст"
            value={isValue}
            onChange={(e) => setIsValue(e.target.value)}
          />
          <Icon align="left">
            <i className="fas fa-info-circle"></i>
          </Icon>
          <Icon
            align="right"
            color="info"
            size="large"
            // style={{
            //   border: '1px solid red'
            // }}
            className="image"
          >
            <i className="fas fa-home fa-2x" />
          </Icon>
        </Form.Control>
        {isValue === "123" && <Form.Help color="danger">This username is available: {isValue}</Form.Help>}
      </Form.Field>
    </Box>
  );
}

export default App;
