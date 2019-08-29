const reverseArray = require('../reverseArray').reverseArray

describe("`reverseArray()`", () => {
  it("Returns [4,3,2,1] when given [1,2,3,4]", () => {
    expect(reverseArray([1,2,3,4])).toEqual([4,3,2,1]);
  });

  it("Returns [4,3,2,1,0] when given [0,1,2,3,4]", () => {
    expect(reverseArray([0, 1, 2, 3, 4])).toEqual([4, 3, 2, 1, 0]);
  });
});