const rockTheDojoSweatshirt = require('../rockTheDojoSweatshirt').rockTheDojoSweatshirt

describe("`rockTheDojoSweatshirt()`", () => {
  it("Returns 20 when given 1", () => {
    expect(rockTheDojoSweatshirt(1)).toBe(20)
  });

  it("Returns 36 when given 2", () => {
    expect(rockTheDojoSweatshirt(2)).toBe(36)
  });

  it("Returns 49 when given 3", () => {
    expect(rockTheDojoSweatshirt(3)).toBe(49)
  });

  it("Returns 26 when given 4", () => {
    expect(rockTheDojoSweatshirt(4)).toBe(52)
  });

  it("Returns 65 when given 5", () => {
    expect(rockTheDojoSweatshirt(5)).toBe(65)
  });

})