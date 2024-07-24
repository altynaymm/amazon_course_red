import { CarouselProps } from '@/types/carousel';
import { FC } from 'react';
import MoreInfoButton from './MoreInfoButton';

const Carousel: FC<CarouselProps> = ({ id, title, desc, img, openModal }) => {
  return (
    <div className="carousel">
      <div className="carousel-header">
        <p className="carousel-header__order">{id}</p>
        <p className="carousel-header__title">{title}</p>
      </div>
      <p className="carousel__text">{desc}</p>
      <MoreInfoButton
        onMoreInfoClick={openModal}
        starColor={'#DCFF7B'}
        buttonColor={'black'}
      />
      <div className="carousel-image">
        <img className="carousel-image__img" src={img} alt="avatar" />
      </div>
    </div>
  );
};

export default Carousel;
