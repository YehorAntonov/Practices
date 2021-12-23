const task3 = require('../Task3');
describe('task3', () => {
    test('test task3', () => {
        expect(task3('stop', 'post')).toBe('Строки являются анаграммами');
    })
    test('test task3', () => {
        expect(task3('stop?', 'pos!t')).toBe('Строки являются анаграммами');
    })
    test('test task3', () => {
        expect(task3('stop', 'postal')).toBe('Строки не анаграммы');
    })
    test('test task3', () => {
        expect(task3('stop', 'rote')).toBe('Строки не анаграммы');
    })
})