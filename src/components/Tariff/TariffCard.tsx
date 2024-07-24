import { TariffCardProps } from '@/types/tarifCard';
import Button from '../UI/Button';
import Star from '../UI/Star';
import { FC } from 'react';
import { useTimerContext } from '@/store/TimerContext';

const TariffCard: FC<TariffCardProps> = ({
  id,
  oldPrice,
  price,
  services,
  img,
  name,
  primaryColor,
  secondaryColor,
  subtitle,
}) => {
  const { isTimerExpired } = useTimerContext();

  return (
    <div className="tariff-card" key={id}>
      <div className="tariff-card-header">
        <img className="tariff-card-header__image" src={img} alt="tariff-img" />
        <div className="tariff-card-header__name">
          {name}
          {subtitle && (
            <div className="tariff-card-header__name__sub">{subtitle}</div>
          )}
        </div>
      </div>
      <div className="tariff-card-services">
        {services.map(el => (
          <div
            className={
              el.included
                ? `tariff-card-services__item`
                : `tariff-card-services__item tariff-card-services__item--strikethrough`
            }
          >
            <Star color={primaryColor} />
            {el.name}
          </div>
        ))}
      </div>
      <div className="tariff-card__price">
        <p
          className={`tariff-card__price ${isTimerExpired ? 'tariff-card__price--new' : 'tariff-card__price--old'} `}
        >
          {oldPrice}$
        </p>
        {!isTimerExpired && (
          <p className="tariff-card__price  tariff-card__price--new">
            {price}$
          </p>
        )}
      </div>
      <Button
        title={`Тариф ${name} ${subtitle}`}
        primaryColor={primaryColor}
        arrowColor={
          id === 0 ? primaryColor : id === 1 ? secondaryColor : undefined
        }
        secondaryColor={secondaryColor}
        titleColor={
          id === 0 ? primaryColor : id === 1 ? secondaryColor : undefined
        }
        subtitle="купить"
        onClick={() => null}
      ></Button>
    </div>
  );
};

export default TariffCard;
