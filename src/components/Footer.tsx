import Button from './UI/Button';
import DonutImg from '@img/donut.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <img
          src={DonutImg}
          alt="donut"
          className="footer__image footer__image--top"
        />
        <h4 className="footer__title">
          Есть <br />
          вопросы?
        </h4>
        <Button
          title={'НАПИСАТЬ менеджеру'}
          primaryColor={'#DCFF7B'}
          secondaryColor={'#2F2F2F'}
          onClick={() => null}
        />
        <img
          src={DonutImg}
          alt="donut"
          className=" footer__image footer__image--bottom"
        />
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom__name">ИП AMZ consult ИИН 940722400087</p>
        <div className="footer-bottom-links">
          <a
            className="footer-bottom-links__item"
            href="#"
            target={'_blank'}
          >
            Политика конфиденциальности
          </a>
          <a
            className="footer-bottom-links__item"
            href="#"
            target={'_blank'}
          >
            Договор оферты
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
