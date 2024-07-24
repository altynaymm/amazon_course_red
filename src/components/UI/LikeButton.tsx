import { useState } from 'react';

type LikeButtonProps = {
  initialLikes: number;
  icon: string;
};

const LikeButton: React.FC<LikeButtonProps> = ({ initialLikes, icon }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setLikes(likes + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };

  return (
    <div className="like-button" onClick={toggleLike}>
      <span className="like-button__icon"> {icon} </span>
      <span className="like-button__count">{likes}</span>
    </div>
  );
};

export default LikeButton;
