// Создать поле заданного размера и заполнить его
export const createField = (
  sizeX: number,
  sizeY: number,
  template?: number[][]
): number[][] => {
  let field = Array.from({ length: sizeY }).map(() =>
      Array.from({ length: sizeX }).fill(0)
  );
  return field;
};
