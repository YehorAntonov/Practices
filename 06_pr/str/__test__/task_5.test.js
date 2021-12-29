const bind = require('../task_5');
const func = require('../task_5');
describe('bind', () => {
    test('test bind', () => {
        expect(bind({a: 100, b: 200})).toStrictEqual(300);
    })
})