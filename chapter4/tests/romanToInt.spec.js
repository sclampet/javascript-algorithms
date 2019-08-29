const romanToInt = require('../romanToInt').romanToInt

describe("`romanToInt()`", () => {
    it("Returns 609 when given DCIX", () => {
        expect(romanToInt('DCIX')).toBe(609);
    });

    it("Returns 3 when given III", () => {
        expect(romanToInt('III')).toBe(3);
    });

    it("Returns 1492 when given MXDII", () => {
        expect(romanToInt('MXDII')).toBe(1512);
    });
});