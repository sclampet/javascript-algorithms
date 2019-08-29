const bracesValid = require('../bracesValid').bracesValid

describe("`bracesValid()`", () => {
    it("Returns true when given `W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!`", () => {
        expect(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!")).toBe(true);
    });

    it("Returns false when given `D(i{a}l[ t]o)n{e`", () => {
        expect(bracesValid("D(i{a}l[ t]o)n{e")).toBe(false);
    });

    it("Returns false when given `A(1)s[O (n]0{t) 0}k`", () => {
        expect(bracesValid("A(1)s[O (n]0{t) 0}k")).toBe(false);
    });
});