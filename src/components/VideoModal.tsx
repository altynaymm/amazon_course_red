import FadeInSection from '@/utils/FadeInSection';
import modalCloseSvg from '@assets/img/modalbutton.svg';
import { FC } from 'react';

const VideoModal: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className={'video-modal'}>
      <FadeInSection>
        <div className={'video-modal-container'}>
          <button className={'video-modal-close'} onClick={onClose}>
            <img src={modalCloseSvg} alt="close" />
          </button>
          <div className="video-modal-container__title">
            сначала посмотри
            <br />
            видео
          </div>
          <iframe
            className="video-modal-container__iframe"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TkmG_yfzh5o?si=HcsYf48lM5ApWCQ1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </FadeInSection>
    </div>
  );
};

export default VideoModal;
