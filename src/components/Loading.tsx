import DonutImg from '@img/donut.png';

const LoadingPage = () => {
  return (
    <div className="loading">
      <img src={DonutImg} alt="donut" className="loading__image" />
      <p className="loading__text">
        Один момент <br />
        <span className="loading__text__sub">загружаемся...</span>
      </p>
    </div>
  );
};

export default LoadingPage;
