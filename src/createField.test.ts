import { createField } from "./createField";

describe("createField", () => {
  const template = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
  it("should return createField without template", () => {
    expect(createField(3, 3, template)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
  it("should return createField with template", () => {
    expect(createField(2, 2, template)).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });
});
