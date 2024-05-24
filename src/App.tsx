import { FC, useEffect } from 'react';

import './App.css';
import CardList from './components/CardList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { CardService } from './services/card';
import { client } from './services/client';
import { CardListItemProps } from './components/CardList.types';

const App: FC = (): React.ReactElement => {
  const [cards, setCards] = useLocalStorage<CardListItemProps[]>('cards', []);

  useEffect(() => {
    async function fetchData() {
      const cardService = new CardService(client);
      const res = await cardService.getCards();

      setCards(
        res.data.drinks.map((item) => ({
          id: `${item.idDrink}`,
          title: item.strDrink,
          text: item.strInstructions,
          image: item.strDrinkThumb,
          tags: item.strTags,
          rating: 0,
        }))
      );
    }

    if (cards.length === 0) {
      fetchData();
    }
  }, [cards, setCards]);

  return (
    <div className="container">
      <CardList cards={cards} onUpdated={(items) => setCards(items)} />
    </div>
  );
};

export default App;
