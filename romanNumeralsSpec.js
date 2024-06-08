const { toRomanLazy } = require("./romanNumerals.js");

console.log(toRomanLazy(4) === "IIII");
console.log(toRomanLazy(150) === "CL");
console.log(toRomanLazy(944) === "DCCCCXXXXIIII");

describe("romanNumerals.js", () => {
    test('Testing 1 of roman numeral', () => {
        expect(toRomanLazy(150)).toBe('CL')
    })

    test('test 2 of roman numeral', () => {
        expect(toRomanLazy(944)).toBe('DCCCCXXXXIIII')
    })
});

