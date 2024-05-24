export interface CardListProps {
  cards: CardListItemProps[];
  onUpdated(items: CardListItemProps[]): void;
}

export interface CardListItemProps {
  id: string;
  title: string;
  image: string;
  text: string;
  tags: string;
  rating: number;
}
