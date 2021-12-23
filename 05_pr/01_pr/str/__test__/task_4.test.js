const checkNumber = require('../Task_4');
describe('checkNumber', () => {
    test('test checkNumber', () => {
        expect(checkNumber(15)).toStrictEqual([false, false, false]);
        expect(checkNumber(10)).toStrictEqual([false, true, true]);
        expect(checkNumber(2)).toStrictEqual([true, true, false]);
        expect(checkNumber(0)).toStrictEqual([false, true, false]);
        expect(checkNumber(-2)).toStrictEqual([false, true, false]);
        expect(checkNumber(-10)).toStrictEqual([false, true, true]);
        expect(checkNumber(-9)).toStrictEqual([false, false, false]);
    })
})