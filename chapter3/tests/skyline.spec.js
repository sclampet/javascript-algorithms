const skyline = require('../skyline').skyline

describe("`skyline()`", () => {
  it("Returns [1,7] when given [-1,1,1,7,3]", () => {
    expect(skyline([-1,1,1,7,3])).toEqual([1,7]);
  });

  it("Returns [4] when given [0,4]", () => {
    expect(skyline([0,4])).toEqual([4]);
  });
});