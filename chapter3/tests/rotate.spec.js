const rotate = require('../rotate').rotate

describe("`rotate()`", () => {
  it("Returns [3,1,2] when given [1,2,3] offset: 1", () => {
    expect(rotate([1,2,3], 1)).toEqual([3,1,2])
  });

  it("Returns [7,8,9,10,1,2,3,4,5,6] when given [1,2,3,4,5,6,7,8,9,10] offSet: 4", () => {
    expect(rotate([1,2,3,4,5,6,7,8,9,10], 4)).toEqual([7,8,9,10,1,2,3,4,5,6])
  });

  it("Returns [2,3,1] when given [1,2,3] offset: -1", () => {
    expect(rotate([1, 2, 3], -1)).toEqual([2, 3, 1])
  });
});