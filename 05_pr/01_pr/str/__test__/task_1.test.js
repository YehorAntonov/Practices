const isPalindrom = require('../Task_1');
describe('isPalindrom', () => {
    test('test palindrom', () => {
        expect(isPalindrom('tenet')).toBe(true);
        expect(isPalindrom('fjdfjd')).toBe(false);
    })
})