import encodeMorse from '../encodeMorse';

describe('encode Morse' , () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test.each([
        ['  HEY JUDE  ', ".... . -.-- .--- ..- -.. ."],
        ['hey jude ', ".... . -.-- .--- ..- -.. ."],
        ['yEhOr', '-.-- . .... --- .-.'],
        ['SOS', '...---...']
    ])('encode morse', function (arg, result) {
        expect(encodeMorse(arg)).toBe(result)
    })
})