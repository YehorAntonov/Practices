const task1 = require('../Task1');
describe('task1', () => {
    test('test task1', () => {
        expect(task1(15)).toStrictEqual([1, 2, 'three', 4, 'five', 'three', 7, 8, 'three', 'five', 11, 'three', 13, 14, 'threeFive']);
    })
    test('test task1', () => {
        expect(task1(3)).toStrictEqual([1, 2, 'three']);
    })
    test('test task1', () => {
        expect(task1(1)).toStrictEqual([1]);
    })
})