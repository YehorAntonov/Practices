import decodeMorse from '../decodeMorse';

describe('decodeMorse', () => {
    test('test', () => {
        expect(true).toBe(true);
    })
    test.each([
        ['.... . -.--   .--- ..- -.. .', "HEY JUDE"],
        ['...---...', 'SOS'],
        ['-.-- . .... --- .-.', 'YEHOR']
    ])('decode morse', function(arg, result) {
        expect(decodeMorse(arg)).toBe(result);
    })

})