function empty(obj)
{
    const props = Object.getOwnPropertyNames(obj);
    obj1 = JSON.stringify(obj);
    if (obj1 === '{}')
    {
        return true;
    }
    for (let i = 0; i < props.length; i++)
    {
        const prop = props[i];
        if (obj[prop] === undefined || obj[prop] === null)
        {
            return true;
        }
    }
    return false;
}
let obj = {a: 2};
console.log(empty(obj));
module.exports = empty;