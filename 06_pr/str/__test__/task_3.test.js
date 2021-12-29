const repeat = require('../task_3');
describe('compObj', () => {
    test('test repeat', () => {
        expect(repeat([1, 3, 3, 4, 2, 5, 2, 2])).toStrictEqual([1, 3, 4, 2, 5]);
    })
    test('test repeat', () => {
        expect(repeat([1, 2, 2, 'err', 6, 'err'])).toStrictEqual([1, 2, 'err', 6]);
    })
})