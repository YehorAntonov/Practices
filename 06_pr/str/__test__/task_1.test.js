const compObj = require('../task_1');
describe('compObj', () => {
    test('test compObj', () => {
        expect(compObj({b: 4, c: 77}, {c: 77, a: 0})).toStrictEqual({c: 77});
    })
    test('test compObj', () => {
        expect(compObj({b: 4, c: 77}, {c: 65, a: 0})).toStrictEqual(false);
    })
})