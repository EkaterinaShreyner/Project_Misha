import React from 'react';
import './ModalConfirm.css';
import SmileConfirm from "../../images/smileconfirm.png";

function ModalConfirm(props) {
  return (
    // <div className={`modal-confirm ${props.modal? "modal-confirm_active" : ""} `}>
    <div className="modal-confirm">
      <img className="modal-confirm__img" src={SmileConfirm} alt="Результаты отправлены" />
      <p className="modal-confirm__text">Результаты отправлены!</p>
    </div>
  )
}

export default ModalConfirm
