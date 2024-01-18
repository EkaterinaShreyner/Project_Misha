import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import "bulma/css/bulma.min.css";
import "./App.css";
import { Box } from "react-bulma-components";

import Header from "../Header/Header";
import RenderProgress from "../Progress/Progress";
import Promo from "../Promo/Promo";
import Main from "../Main/Main";
import Ideas from "../Ideas/Ideas";

function App() {

  const [isShowModal, setShowModal] = useState(false);
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header/>
            <Main isShowModal={isShowModal} setShowModal={() => setShowModal(true)}/>
          </>
        }
      ></Route>
      <Route
        path='/other-ideas'
        element={
          <>
            <Header/>
            <Ideas isShowModal={isShowModal}/>
          </>
        }
      ></Route>
      <Route
        path='/progress-bar'
        element={
          <Box>
            {Header()}
            {RenderProgress()}
          </Box>
        }
      ></Route>
      <Route
        path='/promo'
        element={
          <>
            <Header/>
            <Promo isShowModal={isShowModal}/>
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;