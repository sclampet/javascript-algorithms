const fibonacci = require('../fibonacci').recursiveFib

describe("`fibonnaci`", () => {
  it("Returns 0 given 0", () => {
    expect(fibonacci(0)).toBe(0)
  });

  it("Returns 1 given 1", () => {
    expect(fibonacci(1)).toBe(1)
  });

  it("Returns 2 given 3", () => {
    expect(fibonacci(3)).toBe(2)
  });

  it("Returns 8 given 6", () => {
    expect(fibonacci(6)).toBe(8)
  });
});