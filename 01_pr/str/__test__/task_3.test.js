const isMath = require('../Task_3');
describe('isMath', () => {
    test('test isMath', () => {
        expect(isMath('75', 15)).toBe(60);
        expect(isMath('75', 10)).toBe(85);
        expect(isMath('44', 3)).toBe(47);
    })
})