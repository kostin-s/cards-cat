export const titleMouse = (count: number): string => {
  if (count < 2) {
    return 'мышь в подарок';
  } else if (count > 1 && count < 5) {
    return ' мыши в подарок';
  } else {
    return ' мышей в подарок';
  }
};
