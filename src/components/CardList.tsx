import { FC, useCallback, useState } from 'react';

import classes from './CardList.module.css';
import Card from './Card';
import Draggable from './Draggable';
import { CardListItemProps, CardListProps } from './CardList.types';
import { swap } from '@utils/array';

const CardList: FC<CardListProps> = ({ cards, onUpdated }): React.ReactElement => {
  const [dragginItemId, setDragginItemId] = useState('');
  const [dragOver, setDragOver] = useState('');

  const handleDragStart = useCallback((e: React.DragEvent<HTMLElement>): void => {
    setDragginItemId(e.currentTarget.id);
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLElement>): void => {
    e.preventDefault();
    setDragOver(e.currentTarget.id);
  };

  const handleDragEnd = (): void => {
    setDragginItemId('');
    setDragOver('');
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>): void => {
    const startIndex = cards.findIndex((item) => item.id === dragginItemId);
    const endIndex = cards.findIndex((item) => item.id === e.currentTarget.id);

    if (startIndex === endIndex) return;

    onUpdated(swap(cards, startIndex, endIndex));

    setDragginItemId('');
    setDragOver('');
  };

  return (
    <div className={classes['card-list']}>
      {cards.map((item: CardListItemProps) => (
        <div className={classes['card-list-item']} key={item.id}>
          <Draggable
            id={item.id}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              text={item.text}
              tags={item.tags}
              isDragging={item.id === dragginItemId}
            />
          </Draggable>
        </div>
      ))}
    </div>
  );
};

export default CardList;
