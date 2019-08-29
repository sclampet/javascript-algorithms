const isAlphabetical = require('../isAlphabetical').isAlphabetical

describe("`isAlphabetical()`", () => {
    it("Returns true when give `bill`", () => {
        expect(isAlphabetical("bill")).toBe(true);
    });

    it("Returns true when give `Ads`", () => {
        expect(isAlphabetical("Ads")).toBe(true);
    });

    it("Returns false when give `bored`", () => {
        expect(isAlphabetical("bored")).toBe(false);
    });
});