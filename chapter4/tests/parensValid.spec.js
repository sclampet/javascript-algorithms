const parensValid = require('../parensValid').parensValid

describe("`parensValid()`", () => {
    it("Returns true when given 'Y,(3(p)p(3)r)s'", () => {
        expect(parensValid("Y,(3(p)p(3)r)s")).toBe(true);
    });

    it("Returns false when given 'N(0(p)3('", () => {
        expect(parensValid("N(0(p)3(")).toBe(false);
    });
});