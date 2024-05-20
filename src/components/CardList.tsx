import { FC, useState } from 'react';

import Card from './Card';
import Draggable from './Draggable';

const CardList: FC<CardListProps> = ({ items }): React.ReactElement => {
  const [dragginItemId, setDragginItemId] = useState('');
  const [dragOver, setDragOver] = useState('');
  const [cards, setCards] = useState(items);

  const handleDragStart = (e: React.DragEvent<HTMLElement>): void => {
    setDragginItemId(e.currentTarget.id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>): void => {
    e.preventDefault();
    setDragOver(e.currentTarget.id);
  };

  const handleDragEnd = (): void => {
    setDragginItemId('');
    setDragOver('');
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>): void => {
    const srcIndex = cards.findIndex((item) => item.id === dragginItemId);
    const destIndex = cards.findIndex((item) => item.id === e.currentTarget.id);

    setCards((items: CardListItemProps[]) => {
      let copy = [...items];
      const el = copy.splice(srcIndex, 1);
      return [...copy.slice(0, destIndex), el[0], ...copy.slice(destIndex)];
    });

    setDragginItemId('');
    setDragOver('');
  };

  return (
    <div className="grid grid--4-cols">
      {cards.map((item: CardListItemProps) => (
        <Draggable
          key={item.id}
          id={item.id}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            text={item.text}
            tags={item.tags}
            isDragging={item.id === dragginItemId}
          />
        </Draggable>
      ))}
    </div>
  );
};

export default CardList;
