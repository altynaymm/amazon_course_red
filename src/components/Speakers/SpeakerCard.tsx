import { FC } from 'react';
import StarImg from '../UI/Star';
import { SpeakerCardProps } from '@/types/speakerCard';

const SpeakerCard: FC<SpeakerCardProps> = ({ name, image, details }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="card-image__img" src={image} alt="avatar" />
        <h4 className="card-image__name">
          <StarImg color={'white'} /> {name}
        </h4>
      </div>
      <div className="card-details">
        {details.map((el, index) => (
          <div className="card-details__item" key={index}>
            <div className="card-details__item__icon">
              <StarImg color={'black'} />
            </div>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerCard;
