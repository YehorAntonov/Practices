const checkString = require('../Task_2');
describe('checkString', () => {
    test('test string', () => {
        expect(checkString(23)).toBe('Incorrect input data');
        expect(checkString('lfvk?fkdkfjcndkdkdkdk')).toBe('INVALID');
        expect(checkString('l')).toBe('INVALID');
        expect(checkString('!lfvk?fk')).toBe('INVALID');
        expect(checkString('3lfvk?f')).toBe('INVALID');
        expect(checkString('lfvk?fkd')).toBe('INVALID');
        expect(checkString('Ldfhefh')).toBe('INVALID');
        expect(checkString('Lf5hj ?fl')).toBe('VALID');
    })
})