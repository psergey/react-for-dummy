import { FC } from 'react';

import './App.css';
import CardList from './components/CardList';

const data = [
  {
    id: '1',
    title: 'Margarita 1',
    text: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the oute rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass',
    image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    tags: 'IBA,ContemporaryClassic',
  },
  {
    id: '2',
    title: 'Margarita 2',
    text: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the oute rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass',
    image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    tags: 'IBA,ContemporaryClassic',
  },
  {
    id: '3',
    title: 'Margarita 3',
    text: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the oute rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass',
    image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    tags: 'IBA,ContemporaryClassic',
  },
  {
    id: '4',
    title: 'Margarita 4',
    text: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the oute rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass',
    image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    tags: 'IBA,ContemporaryClassic',
  },
  {
    id: '5',
    title: 'Margarita 5',
    text: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the oute rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass',
    image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    tags: 'IBA,ContemporaryClassic',
  },
  {
    id: '6',
    title: 'Margarita 6',
    text: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the oute rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass',
    image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    tags: 'IBA,ContemporaryClassic',
  },
];

const App: FC = (): React.ReactElement => {
  return (
    <div className="container">
      <CardList items={data} />
    </div>
  );
};

export default App;
