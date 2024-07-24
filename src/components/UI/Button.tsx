import { ButtonProps } from '@/types/button';
import { FC } from 'react';
import Arrow from './Arrow';

const Button: FC<ButtonProps> = ({
  primaryColor,
  secondaryColor,
  title,
  titleColor,
  subtitle,
  onClick,
  arrowColor,
}) => {
  const buttonStyle = {
    backgroundColor: primaryColor,
    color: secondaryColor,
  };

  const buttonSubtitleStyle = {
    color: secondaryColor,
  };

  return (
    <button className="button" style={buttonStyle} onClick={onClick}>
      <p className="button__title">{title}</p>
      <div
        className={`button-subtitle ${subtitle ? 'button-subtitle--active' : ''}`}
        style={buttonSubtitleStyle}
      >
        <p
          className="button-subtitle__text"
          style={{ color: titleColor || secondaryColor }}
        >
          {subtitle}
        </p>
        <Arrow color={arrowColor || secondaryColor} />
      </div>
    </button>
  );
};

export default Button;
