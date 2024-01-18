import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import "bulma/css/bulma.min.css";
import "./App.css";
import { Box } from "react-bulma-components";

import Header from "../Header/Header";
import RenderProgress from "../Progress/Progress";
import Promo from "../Promo/Promo";
import Main from "../Main/Main";
import Ideas from "../Ideas/Ideas";
import * as mainApi from "../../utils/MainApi";

function App() {
  const [cardIdeaList, setCardIdeaList] = useState([]);

  useEffect(() => {
    console.log('test')
    mainApi.getCards()
      .then((cards) => {
        console.log('test2')
        setCardIdeaList(cards)
        console.log(cardIdeaList)
      })
      .catch((err) => console.log(err))
  }, [])

  const [isShowModal, setShowModal] = useState(false);
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header/>
            <Main cardIdeaList={cardIdeaList} isShowModal={isShowModal} setShowModal={() => setShowModal(true)}/>
          </>
        }
      ></Route>
      <Route
        path='/other-ideas'
        element={
          <>
            <Header/>
            <Ideas cardIdeaList={cardIdeaList} isShowModal={isShowModal} />
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