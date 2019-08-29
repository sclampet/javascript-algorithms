const commonSuffix = require('../chapter4/commonSuffix').commonSuffix

describe("`commonSuffix()`", () => {
    it("Returns 'ion' when given [`deforestation`, `citation`, `conviction`, `incarceration`]", () => {
        expect(commonSuffix(["deforestation", "citation", "conviction", "incarceration"])).toEqual("ion")
    });

    it("Returns '' when given [`ice`, `nice`, `baby`]", () => {
        expect(commonSuffix([`ice`, `nice`, `baby`])).toEqual("")
    });
});
