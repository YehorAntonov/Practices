function compObj(obj1, obj2)
{
    let obj3 = {};
    let count = 0;
    const props1 = Object.getOwnPropertyNames(obj1);
    for (let i = 0; i < props1.length; i++) {
        const prop = props1[i];

        if (obj1[prop] === obj2[prop]) {
            obj3[prop] = obj2[prop];
            count++;
        }
    }
    if (count > 0)
    {
        return obj3;
    }
    else
    {
        return false;
    }

}
module.exports = compObj;