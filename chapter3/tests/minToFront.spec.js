const minToFront = require('../minToFront').minToFront

describe("`minToFront()`", () => {
  it("Returns [1,4,3,2] when given [4,3,1,2]", () => {
    expect(minToFront([4,3,1,2])).toEqual([1,4,3,2])
  });
});