import donutLeft from '@img/donut.png';
import donutRight from '@img/donut.png';
import Button from '../components/UI/Button';
import { FC, useState } from 'react';
import Loading from '../components/Loading';
import { ScreensProps } from '@/types/screens';
import AmazonImg from '@img/amazon.png';

const WelcomPage: FC<ScreensProps> = ({ handlerNextStep }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      handlerNextStep();
    }, 1500);

    return () => clearTimeout(timer);
  };

  return !isLoading ? (
    <div className="welcome">
      <img
        src={donutLeft}
        alt="Left Donut"
        className="welcome__donut welcome__donut--left"
      />
      <div className="welcome-text">
        <div className="welcome-text__line">Учимся</div>
        <div className="welcome-text__line">продавать</div>
        <div className="welcome-text__line">
          на
          <img
            className="welcome-text__icon"
            src={AmazonImg}
            alt="amazonIcon"
          />
        </div>
        <div className="welcome-text__line">Амазон</div>

        <Button
          title="Видеопрезентация обучения"
          subtitle="смотреть"
          primaryColor="#F13010"
          secondaryColor="white"
          titleColor={'#F13010'}
          arrowColor={'#F13010'}
          onClick={handleClick}
        />
      </div>
      <img
        src={donutRight}
        alt="Right Donut"
        className="welcome__donut welcome__donut--right"
      />
    </div>
  ) : (
    <Loading />
  );
};

export default WelcomPage;
