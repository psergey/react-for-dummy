import { FC, useCallback, useState } from 'react';

import { swap } from '@utils/array';
import Card from './Card';
import Draggable from './Draggable';
import Modal from './Modal';
import Rate from './Rate';
import { CardListItemProps, CardListProps } from './CardList.types';
import classes from './CardList.module.css';

const CardList: FC<CardListProps> = ({ cards, onUpdated }): React.ReactElement => {
  const [dragginItemId, setDragginItemId] = useState('');
  const [dragOver, setDragOver] = useState('');
  const [selectedItemId, setSelectedItemId] = useState<string>();

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

  const itemClickHandler = (id: string) => {
    setSelectedItemId(id);
  };

  const rateSelectedItemHandler = () => {
    onUpdated(
      cards.map((item) =>
        item.id == selectedItemId
          ? {
              ...item,
              rating: item.rating + 1,
            }
          : item
      )
    );
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
              onClick={itemClickHandler}
            />
          </Draggable>
        </div>
      ))}
      {selectedItemId && (
        <Modal open={!!selectedItemId} onClose={() => setSelectedItemId('')}>
          <Rate {...cards.find((item) => item.id == selectedItemId)!} onRate={rateSelectedItemHandler} />
        </Modal>
      )}
    </div>
  );
};

export default CardList;
