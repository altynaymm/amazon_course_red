import Button from '@/components/UI/Button';
import { FC } from 'react';
import { ScreensProps } from '@/types/screens';

const VideoPresentationPage: FC<ScreensProps> = ({ handlerNextStep }) => {
  return (
    <div className="video">
      <div className="wrapper">
        <div className="video-text">
          <div className="video-text__line">Видео</div>
          <div className="video-text__line">Презентация</div>
          <div className="video-text__line">Обучающей</div>
          <div className="video-text__line">Программы</div>
        </div>
        <div className="video-youtube">
          <iframe
            className="video-youtube__iframe"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TkmG_yfzh5o?si=HcsYf48lM5ApWCQ1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <Button
          onClick={handlerNextStep}
          title="Перейти на сайт"
          primaryColor="red"
          secondaryColor="white"
          arrowColor={'#F13010'}
        />
      </div>
    </div>
  );
};

export default VideoPresentationPage;
