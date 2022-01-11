const Validator = require('../task_2');


describe("Tests class Validator", function () {


    test('test for email', () => {
        expect(Validator.isEmail('phphtml@mail.ru')).toBe(true);
    })
    test('test for domain', () => {
        expect(Validator.isDomain('phphtml.net')).toBe(true);
    })
    test('test for domain', () => {
        expect(Validator.isDomain('https://web.telegram.org/')).toBe(true);
    })
    test('test for date', () => {
        expect(Validator.isDate('12.05.2020')).toBe(true);
    })
    test('test for date', () => {
        expect(Validator.isDate('12.05.2020.45')).toBe(false);
    })
    test('test for phone', () => {
        expect(Validator.isPhone('+38(029)817-68-92')).toBe(true);
    })


})