import { FC } from 'react';
import Star from './Star';
import { MoreInfoButtonProps } from '@/types/moreInfoButton';

const MoreInfoButton: FC<MoreInfoButtonProps> = ({
  onMoreInfoClick,
  starColor,
  buttonColor,
}) => {
  return (
    <button
      className={`info-button info-button--${buttonColor}`}
      onClick={onMoreInfoClick}
    >
      <Star color={starColor} />
      Подробнее
    </button>
  );
};

export default MoreInfoButton;
