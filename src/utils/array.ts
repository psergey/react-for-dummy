export function swap<T>(array: Array<T>, startIndex: number, endIndex: number): Array<T> {
  const copy = [...array];
  const el = copy.splice(startIndex, 1);
  return [...copy.slice(0, endIndex), el[0], ...copy.slice(endIndex)];
}
