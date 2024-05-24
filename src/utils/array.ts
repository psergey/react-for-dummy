interface Array<T> {
  swap(srcIndex: number, destIndex: number): Array<T>;
}

Array.prototype.swap = function swap<T>(this: T[], srcIndex: number, destIndex: number): Array<T> {
  const copy = [...this];
  const el = copy.splice(srcIndex, 1);
  return [...copy.slice(0, destIndex), el[0], ...copy.slice(destIndex)];
};
