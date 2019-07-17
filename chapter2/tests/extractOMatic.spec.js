const extractOMatic = require('../extractOMatic').extractOMatic2

describe("`extractOMatic()`", () => {
  it("Returns 4 when given 1824 and 0", () => {
    expect(extractOMatic(1824, 0)).toBe(4)
  });

  it("Returns 1 when given 1824 and 1", () => {
    expect(extractOMatic(1824, 1)).toBe(2)
  });

  it("Returns 8 when given 1824 and 2", () => {
    expect(extractOMatic(1824, 2)).toBe(8)
  });

  it("Returns 1 when given 1824 and 3", () => {
    expect(extractOMatic(1824, 3)).toBe(1)
  });
})