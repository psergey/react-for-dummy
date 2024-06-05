export interface CardProps {
  id: string;
  title: string;
  image: string;
  text: string;
  tags: string;
  isDragging: boolean;
  maxTextSize?: number;
  onClick(id: string): void;
}
