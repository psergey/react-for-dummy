import { FC } from 'react';

import classes from './Card.module.css';
import { CardProps } from './Card.types';

const MAX_TEXT_LENGTH = 80;

const Card: FC<CardProps> = ({
  title,
  image,
  text,
  tags,
  isDragging,
  maxTextSize = MAX_TEXT_LENGTH,
}): React.ReactElement => {
  const cardTags: string[] = tags?.split(',').slice(0, 2) ?? [];

  return (
    <div className={`${classes.card} ${isDragging ? classes.dragging : ''}`}>
      <div className={classes['card-media']}>
        <img src={image} alt={title}></img>
      </div>
      <div className={classes['card-details']}>
        <h2 className={classes['card-title']}>{title}</h2>
        <p className={classes['card-description']}>
          {text.length > maxTextSize ? text.substring(0, maxTextSize) + '...' : text}
        </p>
        <div className={classes['cards-tags']}>
          {cardTags.map((item: string) => (
            <span key={classes.tag} className={classes.tag}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
