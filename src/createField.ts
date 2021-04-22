// Создать поле заданного размера и заполнить его
export const createField = (
  sizeX: number,
  sizeY: number,
  template?: number[][]
): number[][] => {
  let field;
  if (!template) {
    field = new Array(sizeY).fill(0).map(() => new Array(sizeX).fill(0));
  } else {
    field = template;
  }
  return field;
};
