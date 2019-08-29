const removeNegatives = require('../removeNegatives').removeNegatives

describe("`removeNegatives()`", () => {
  it("Returns [5,3,2,10] when give [-3,5,-2,2,10]", () => {
    expect(removeNegatives([-3,5,-2,2,10])).toEqual([5,2,10])
  });
});