import { FC, PropsWithChildren } from 'react';

const Draggable: FC<
  {
    id: string;
    onDragStart(e: React.DragEvent<HTMLElement>): void;
    onDragOver(e: React.DragEvent<HTMLElement>): void;
    onDrop(e: React.DragEvent<HTMLElement>): void;
    onDragEnd(e: React.DragEvent<HTMLElement>): void;
  } & PropsWithChildren
> = ({ id, onDragStart, onDragOver, onDrop, onDragEnd, children }): React.ReactElement => {
  return (
    <div id={id} onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd} onDrop={onDrop} draggable>
      {children}
    </div>
  );
};

export default Draggable;
