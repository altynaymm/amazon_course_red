import StarImg from '@img/star.svg';
import QuestionImg from '@img/question.svg';
import LikeButton from './UI/LikeButton';
import FadeInSection from '@/utils/FadeInSection';

const Benefits = () => {
  return (
    <FadeInSection>
    <div className="benefits">
      <h4 className="benefits__title">
        Кому будет <br /> полезно
      </h4>
      <img src={QuestionImg} alt="question" className="benefits__icon" />
      <img src={StarImg} alt="star" className="benefits__image" />
      <div className="benefits-block">
        <div className="benefits-block-section">
          <p className="benefits-block-section__title">
            Для тех, кто хочет освоить{' '}
            <span className="benefits-block-section__title--bold">
              новую профессию
            </span>{' '}
            и устроиться на работу менеджером по маркетплейсам
          </p>
          <p className="benefits-block-section__text">
            (Согласно исследованиям компании hh.ru зарплата менеджера по
            маркетплейсам составляет
            <span className="benefits-block-section__text--highlight">
              {' '}
              от 1200$/ мес.
            </span>{' '}
            )
          </p>
          <div className="benefits-block-section-icons">
          <LikeButton initialLikes={520} icon="🔥" />
          <LikeButton initialLikes={270} icon="🎁" />
          </div>
        </div>
        <div className="benefits-block-section">
          <p className="benefits-block-section__title">
            Для тех, кто ищет <br />
            <span className="benefits-block-section__title--bold">
              дополнительный заработок
            </span>
          </p>
          <div className="benefits-block-section-icons">
          <LikeButton initialLikes={520} icon="🔥" />
          <LikeButton initialLikes={270} icon="🎁" />
          </div>
        </div>
        <div className="benefits-block-section">
          <p className="benefits-block-section__title">
            Для тех, кто хочет полностью нырнуть головой в{' '}
            <span className="benefits-block-section__title--bold">
              {' '}
              товарный бизнес
            </span>
          </p>
          <div className="benefits-block-section-icons">
          <LikeButton initialLikes={520} icon="🔥" />
          <LikeButton initialLikes={270} icon="🎁" />
          </div>
        </div>
      </div>
    </div>
    </FadeInSection>
  );
};

export default Benefits;
