const isPrime = require('../isPrime').isPrime

describe("`isPrime()`", () => {
  it("Returns true if given 7", () => {
    expect(isPrime(7)).toBe(true)
  });

  it("Returns true if given 11", () => {
    expect(isPrime(11)).toBe(true)
  });

  it("Returns false if given 8", () => {
    expect(isPrime(8)).toBe(false)
  });

  it("Returns false if given a negative number", () => {
    expect(isPrime(-3)).toBe(false)
  });
})