// Создать поле заданного размера и заполнить его
export const createField = (sizeX: number, sizeY: number): number[][] => {
  const arrayY: number[][] = [];

  for (let i = 0; i < sizeY; i++) {
    const arrayX: number[] = [];
    for (let j = 0; j < sizeX; j++) {
      arrayX[j] = 0;
    }
    arrayY[i] = arrayX;
  }

  return arrayY;
};
