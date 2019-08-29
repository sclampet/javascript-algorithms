const strBinarySearch = require('../stringBinarySearch').stringBinarySearch;

describe("`strBinarySearch()`", () => {
  it("Returns false when given ` &-0379DEFXZ[abcz|, 6`", () => {
    expect(strBinarySearch(" &-0379DEFXZ[abcz|", "6")).toBe(false);
  });

  it("Returns true when given ` &-0379DEFXZ[abcz|, c`", () => {
    expect(strBinarySearch(" &-0379DEFXZ[abcz|", "c")).toBe(true);
  });
});