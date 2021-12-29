function deepCompObj(obj1, obj2)
{
    const props1 = Object.getOwnPropertyNames(obj1);
    const props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i++) {
        const prop = props1[i];
        const deep = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';

        if (((deep === false) && (obj1[prop] !== obj2[prop])) || ((deep === true) && (deepCompObj(obj1[prop], obj2[prop])) === false)) {
            return false;
        }
    }

    return true;
}
let obj1 = {
    a: 1,
    b: {d: 1}
}
let obj2 = {
    a: 1,
    b: {c: 1}
}
console.log(deepCompObj(obj1, obj2));
module.exports = deepCompObj;