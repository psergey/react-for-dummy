const className = (classes: Record<string, boolean>): string =>
  Object.keys(classes)
    .map((key) => (classes[key] ? key : ""))
    .join(" ");

export default className;
