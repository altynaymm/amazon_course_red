import { FC } from 'react';
import MoreInfoButton from '../UI/MoreInfoButton';
import { HighlightContentProps } from '@/types/highlightContent';

const HighlightsContent: FC<HighlightContentProps> = ({
  title,
  buttonColor,
  starColor,
  image,
  onMoreInfoClick,
  contentBackground,
  backgroundImage,
}) => {
  return (
    <>
      <div
        className={`highlights-content highlights-content--${contentBackground}`}
      >
        <p>{title}</p>
        <MoreInfoButton
          onMoreInfoClick={onMoreInfoClick}
          starColor={starColor}
          buttonColor={buttonColor}
        />
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt=""
            className="highlights-content__background"
          />
        )}
      </div>
      {image && (
        <div className="highlights-content__image">
          <img src={image} alt={title} />
        </div>
      )}
    </>
  );
};

export default HighlightsContent;
