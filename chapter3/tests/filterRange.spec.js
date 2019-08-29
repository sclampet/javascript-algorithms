const filterRange = require('../filterRange').filterRange
const shiftArr = require('../filterRange').shiftArr

//filterRange
describe("`filterRange()`", () => {
  it("Returns [1,2,5,6,7] when give [1,2,3,4,5,6,7] min: 3 max 4", () => {
    expect(filterRange([1,2,3,4,5,6,7], 3, 4)).toEqual([1,2,5,6,7])
  });
});

//shiftArr
describe("`shiftArr()`", () => {
  it("Returns [1,2,3,5,6,7] when given [1,2,3,4,5,6,7] index: 3", () => {
    expect(shiftArr([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([1, 2, 3, 5, 6, 7]);
  });
});