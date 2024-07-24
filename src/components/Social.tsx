import FadeInSection from '@/utils/FadeInSection';
import socialData from '@assets/data/socialData.ts';

import messageSvg from '@assets/icons/message.svg';

const Social = () => {
  return (
    <FadeInSection>
      <div className="social">
        <h3 className="social__title">
          Наши
          <br />
          соц.сети
        </h3>
        <div className={'social-list'}>
          {socialData.map((item, id) => (
            <a href={item.link} className={'social-item'} key={id + item.title}>
              <img
                className={'social-item__icon'}
                src={item.icon}
                alt={item.title}
              />
              <p className={'social-item__label'}>{item.title}</p>
            </a>
          ))}
        </div>
        <div className="social-label">
          <img
            className={'social-label__icon'}
            src={messageSvg}
            alt={'message'}
          />
        </div>
      </div>
    </FadeInSection>
  );
};

export default Social;
