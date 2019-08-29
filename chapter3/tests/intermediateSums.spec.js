const intermediateSums = require('../intermediateSums').intermediateSums

describe("`intermediateSums()`", () => {
  it("Retuns [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6] when given [1,2,1,2,1,2,1,2,1,2,1,2,1,2]", () => {
    expect(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2])).toEqual([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15, 1, 2, 1, 2, 6])
  });
});