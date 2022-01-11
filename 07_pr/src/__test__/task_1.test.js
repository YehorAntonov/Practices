const MyString = require('../task_1');

describe("Tests class MyString", function () {
    test('test for reverse', () => {
        expect(MyString.reverse('abcde')).toBe('edcba');
    })
    test('test for reverse', () => {
        expect(MyString.reverse(7)).toBe(false);
    })
    test('test for ucWords', () => {
        expect(MyString.ucWords('abcde abcde abcde')).toBe('Abcde Abcde Abcde');
    })
    test('test for ucWords', () => {
        expect(MyString.ucWords('abcde')).toBe('Abcde');
    })
    test('test for ucWords', () => {
        expect(MyString.ucWords(45)).toBe(false);
    })
    test('test for ucFirst', () => {
        expect(MyString.ucFirst('abcde')).toBe('Abcde');
    })
    test('test for ucFirst', () => {
        expect(MyString.ucFirst(67)).toBe(false);
    })
    test('test for ucFirst', () => {
        expect(MyString.ucFirst('')).toBe(false);
    })



})