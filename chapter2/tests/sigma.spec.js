const sigma = require('../sigma').sigma2

describe("`sigma()`", () => {
  
  it("Returns 6 when given 3", () => {
    expect(sigma(3)).toBe(6);
  });

  it("Returns 15 when given 5", () => {
    const expected = 15;
    const result = sigma(5);
    expect(result).toBe(expected)
  });
  
});
