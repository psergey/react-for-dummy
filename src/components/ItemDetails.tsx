import { FC, useEffect, useState } from 'react';

import { CardListItemProps } from './CardList.types';

const ItemDetails: FC<CardListItemProps & { onRate(rate: number): void }> = ({
  image,
  title,
  rating,
  onRate,
}): React.ReactElement => {
  const [rate, setRate] = useState(rating);

  return (
    <>
      <img src={image} alt={title}></img>
      <div>
        <button onClick={() => setRate((current) => current + 1)}>+</button>
        <p>{rate === 0 ? 'No Rating' : rate}</p>
        <button onClick={() => setRate((current) => current - 1)}>-</button>
      </div>
    </>
  );
};

export default ItemDetails;
