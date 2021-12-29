const empty = require('../task_4');
describe('empty', () => {
    test('test empty', () => {
        expect(empty({})).toStrictEqual(true);
    })
    test('test compObj', () => {
        expect(empty({b: 4})).toStrictEqual(false);
    })
    test('test compObj', () => {
        expect(empty({b: null})).toStrictEqual(true);
    })
    test('test compObj', () => {
        expect(empty({b: undefined})).toStrictEqual(true);
    })
})