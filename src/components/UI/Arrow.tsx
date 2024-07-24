import { ArrowProps } from '@/types/arrow';
import { FC } from 'react';

const Arrow: FC<ArrowProps> = ({ color }) => {
  return (
    <svg
      className="arrowIcon"
      viewBox="0 0 38 38"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9572 0L38 18.9554L19.0464 38L16.818 35.7819L31.9854 20.5418L0.0073779 20.6168L0 17.4725L31.9779 17.3974L16.7393 2.2286L18.9572 0Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;
