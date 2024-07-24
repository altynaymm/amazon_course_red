import DonutImg from '@img/donut.png';
import OrlanImg from '@img/orlan.png';
import amazonImg from '@img/amazon.png';
import LikeButton from './UI/LikeButton';

const Main = () => {
  return (
    <div className="main">
      <img src={DonutImg} alt="donut" className="main__image" />
      <div className="main-content">
        <img src={OrlanImg} alt="Orlan" className="main-content__orlan-img" />
        <img
          src={amazonImg}
          alt="Amazon"
          className="main-content__amazon-img"
        />
        <div className="main-content-text">
          <p className="main-content-text__line">Запусти</p>
          <p className="main-content-text__line">бизнес</p>
          <p className="main-content-text__line">на амазон</p>
          <p className="main-content-text__line">за 1 месяц</p>
        </div>
        <div className="main-content-icons">
          <LikeButton initialLikes={520} icon="🔥" />
          <LikeButton initialLikes={270} icon="🎁" />
          <LikeButton initialLikes={170} icon="💸" />
        </div>
      </div>
    </div>
  );
};

export default Main;
