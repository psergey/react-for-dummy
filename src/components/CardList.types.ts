interface CardListProps {
  items: CardListItemProps[];
}

interface CardListItemProps {
  id: string;
  title: string;
  image: string;
  text: string;
  tags: string;
}
