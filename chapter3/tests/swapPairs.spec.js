const swapPairs = require('../swapPairs').swapPairs

describe("`swapPairs()`", () => {
  it("Returns [2,1,4,3] when give [1,2,3,4]", () => {
    expect(swapPairs([1,2,3,4])).toEqual([2,1,4,3])
  });

  it("Returns [`bob`, 2, true] when give [2, `bob`, true]", () => {
    expect(swapPairs([`bob`, 2, true])).toEqual([2, `bob`, true])
  });
});