import React from "react";
import { useState, useEffect } from "react";
import './Progress.css'
import { Columns, Card, Button } from "react-bulma-components";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import iconFb from '../../images/brand-icon_facebook.svg'
import iconVk from '../../images/brand-icon_vk.svg'
import iconTg from '../../images/brand-icon_telegram.svg'
import iconTw from '../../images/brand-icon_twitter.svg'

function RenderProgress(value) {
  const navigate = useNavigate();
  const [chance, setChance] = useState(0);
  const [showNameFb, setShowNameFb] = useState(false);
  const [showNameVk, setShowNameVk] = useState(false);
  const [showNameTg, setShowNameTg] = useState(false);
  const [showNameX, setShowNameX] = useState(false);

  const handleFbMouseEnter = () => {
    setShowNameFb(true);
  };

  const handleFbMouseLeave = () => {
    setShowNameFb(false);
  };

  const handleVkMouseEnter = () => {
    setShowNameVk(true);
  };

  const handleVkMouseLeave = () => {
    setShowNameVk(false);
  };

  const handleTgMouseEnter = () => {
    setShowNameTg(true);
  };

  const handleTgMouseLeave = () => {
    setShowNameTg(false);
  };

  const handleXMouseEnter = () => {
    setShowNameX(true);
  };

  const handleXMouseLeave = () => {
    setShowNameX(false);
  };


  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setChance(randomNumber)
  }, []);

  return (
      <div className="check">
        <p className="check__idea">{value}</p>
        <Columns>
          <Columns.Column>
              <p className="check__title">
                ВЕРОЯТНОСТЬ УСПЕХА
              </p>
            {ProgressBar(chance)}
            <p className="check__result">Опубликовать результат</p>
            <ul className="check__links">
              <li 
                className="chech__link-item"
                onMouseEnter={handleFbMouseEnter}
                onMouseLeave={handleFbMouseLeave}>
                <a href="#" class="chech__link">
                  <img
                    class="check__link-icon"
                    src={iconFb}
                    alt="icon Facebook"
                  />
                  {showNameFb && (
                    <span style={{color:'white'}}>Facebook</span>)}
                </a>
              </li>
              <li 
                className="chech__link-item"
                onMouseEnter={handleVkMouseEnter}
                onMouseLeave={handleVkMouseLeave}>
                <a href="#" class="chech__link">
                  <img
                    class="check__link-icon"
                    src={iconVk}
                  />
                  {showNameVk && (
                    <span style={{color:'white'}}>Vkontakte</span>)}
                </a>
              </li>
              <li 
                className="chech__link-item"
                onMouseEnter={handleTgMouseEnter}
                onMouseLeave={handleTgMouseLeave}>
                <a href="#" class="chech__link">
                  <img
                    class="check__link-icon"
                    src={iconTg}
                    alt="icon Telegram"
                  />
                {showNameTg && (
                  <span style={{color:'white'}}>Telegram</span>)}
                </a>
              </li>
              <li 
                className="chech__link-item"
                onMouseEnter={handleXMouseEnter}
                onMouseLeave={handleXMouseLeave}>
                <a href="#" class="chech__link">
                  <img
                    class="check__link-icon"
                    src={iconTw}
                    alt="icon Twitter"
                  />
                  {showNameX && (
                    <span style={{color:'white'}}>Twitter</span>)}
                </a>
              </li>
            </ul>
          </Columns.Column>
          <Columns.Column>
            <Card className="card noLeftBottomRadius">
              <div className="check__image"></div>
              <p className="check__description">
                Но вообще-то вряд ли получится потому что…
              </p>
              <p className="check__know">
                Узнать наиболее вероятные проблемы, которые у тебя возникнут по мнению нашего ИИ
              </p>
              <Button
                className="check__button-know"
                onClick={() => navigate('/promo', { replace: true })}>
                  Узнать
              </Button>
            </Card>
          </Columns.Column>
        </Columns>
      </div>
  );
}

export default RenderProgress;