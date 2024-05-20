import { Meta, StoryObj } from '@storybook/react';

import '../index.css';
import CardList from '../components/CardList';

const meta: Meta<typeof CardList> = {
  title: 'Components/UI/CardList',
  component: CardList,
  decorators: [
    (Story) => (
      <div className="container">
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      {
        id: '1',
        title: 'Margarita',
        text: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the oute rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass',
        image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
        tags: 'IBA,ContemporaryClassic',
      },
      {
        id: '2',
        title: 'Whiskey Sour',
        text: "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice",
        image: 'https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg',
        tags: 'Unforgettables',
      },
      {
        id: '3',
        title: 'Manhattan',
        text: 'Stirred over ice, strained into a chilled glass, garnished, and served up',
        image: 'https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg',
        tags: 'Unforgettables',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
