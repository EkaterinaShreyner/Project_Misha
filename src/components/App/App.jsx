import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const location = useLocation()
  const currentPath = location.pathname;

  useEffect(() => {
      mainApi.getCards()
      .then((cards) => {
        setCardIdeaList(cards)
        console.log(cardIdeaList)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (currentPath === "/") {
      setCardIdeaList(cardIdeaList)
    }
  }, [currentPath])

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header/>
            <Main cardIdeaList={cardIdeaList} />
          </>
        }
      ></Route>
      <Route
        path='/other-ideas'
        element={
          <>
            <Header/>
            <Ideas cardIdeaList={cardIdeaList} />
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
            <Promo />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;