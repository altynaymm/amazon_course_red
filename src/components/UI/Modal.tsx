import { ModalProps } from '@/types/modal';
import FadeInSection from '@/utils/FadeInSection';
import CloseButtonImg from '@img/modalbutton.svg';
import { FC } from 'react';

const Modal: FC<ModalProps> = ({ title, text, onClose }) => {
  return (
    <div className="modal">
      <FadeInSection>
        <div className="modal-content">
          <button className="modal__button" onClick={onClose}>
            <img src={CloseButtonImg} alt="close-btn" />{' '}
          </button>
          <h4 className="modal-content__title">{title}</h4>
          <p className="modal-content__text">{text}</p>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Modal;
