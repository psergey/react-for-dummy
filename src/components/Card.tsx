import { FC } from 'react';

import classes from './card.module.css';

const Card: FC<CardProps> = ({ title, image, text, tags, isDragging }): React.ReactElement => {
  const cardTags: string[] = tags.split(',');

  return (
    <div className={`${classes.card} ${isDragging ? classes.dragging : ''}`}>
      <div className={classes['card-media']}>
        <img src={image} alt={title}></img>
      </div>
      <div className={classes['card-details']}>
        <h2 className={classes['card-title']}>{title}</h2>
        <p className={classes['card-description']}>{text}</p>
        <div className={classes['cards-tags']}>
          {cardTags.map((item: string) => (
            <span className={classes.tag}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
