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
              <li className="chech__link-item">
                <a href="#" class="chech__link">
                  <img
                    class="check__link-icon"
                    src={iconFb}
                    alt="иконка Вконтакте"
                  />
                  <p className="check__link-title">Facebook</p>
                </a>
              </li>
              <li className="chech__link-item">
                <a href="#" class="chech__link">
                  <img
                    class="check__link-icon"
                    src={iconVk}
                    alt="иконка Вконтакте"
                  />
                  <p className="check__link-title">Вконтакте</p>
                </a>
              </li>
              <li className="chech__link-item">
                <a href="#" class="chech__link">
                  <img
                    class="check__link-icon"
                    src={iconTg}
                    alt="иконка Вконтакте"
                  />
                  <p className="check__link-title">Telegram</p>
                </a>
              </li>
              <li className="chech__link-item">
                <a href="#" class="chech__link">
                  <img
                    class="check__link-icon"
                    src={iconTw}
                    alt="иконка Вконтакте"
                  />
                  <p className="check__link-title">X-(Twitter)</p>
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