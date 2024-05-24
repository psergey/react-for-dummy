import { FC, useState } from 'react';

import classes from './CardList.module.css';
import Card from './Card';
import Draggable from './Draggable';
import { CardListItemProps, CardListProps } from './CardList.types';
import Modal from './Modal';
import ItemDetails from './ItemDetails';
import '../utils/array';

const CardList: FC<CardListProps> = ({ cards, onUpdated }): React.ReactElement => {
  const [dragginItemId, setDragginItemId] = useState('');
  const [dragOver, setDragOver] = useState('');

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

    if (srcIndex === destIndex) return;

    onUpdated(cards.swap(srcIndex, destIndex));

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
              title={item.title}
              image={item.image}
              text={item.text}
              tags={item.tags}
              isDragging={item.id === dragginItemId}
            />

            {/* <Modal>
            <Modal.Open
              opens="card"
              render={(onClick) => (
                <div onClick={onClick}>
                  <Card
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    text={item.text}
                    tags={item.tags}
                    isDragging={item.id === dragginItemId}
                  />
                </div>
              )}
            ></Modal.Open>
            <Modal.Window name="card" closeWindow={() => {}}>
              <ItemDetails
                {...item}
                onRate={(rate) =>
                  setCards(
                    items.map((el) =>
                      el.id === item.id
                        ? {
                            ...el,
                            rating: el.rating + rate,
                          }
                        : el
                    )
                  )
                }
              />
            </Modal.Window>
          </Modal> */}
          </Draggable>
        </div>
      ))}
    </div>
  );
};

export default CardList;
