const className = (defalt: string, classes: Record<string, boolean>): string =>
  [
    defalt ?? "",
    ...Object.keys(classes).map((key) => (classes[key] ? key : "")),
  ].join(" ");

export default className;
