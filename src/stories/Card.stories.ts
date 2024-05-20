import { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

const meta = {
  title: 'Components/UI/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };
