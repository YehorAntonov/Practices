const deepCompObj = require('../task_2');
describe('deepCompObj', () => {
    test('test deepCompObj', () => {
        expect(deepCompObj({b: 4, c: 77}, {c: 77, a: 0})).toStrictEqual(false);
    })
    test('test deepCompObj', () => {
        expect(deepCompObj({b: 4, c: {f: 56}}, {b: 4, c: {f: 56}})).toStrictEqual(true);
    })
    test('test deepCompObj', () => {
        expect(deepCompObj({b: 4, c: {f: 56}, g: 90}, {b: 4, c: {f: 56}})).toStrictEqual(false);
    })
})