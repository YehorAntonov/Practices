function task4(object1, object2)
{
    let count = 0;
    const obj1 = Object.getOwnPropertyNames(object1);
    const obj2 = Object.getOwnPropertyNames(object2);
    if (obj1.length !== obj2.length) {
        return false;
    }
    for (let i = 0; i < obj1.length; i++) {
        for (let j = 0; j < obj1.length; j++)
        {
            if (obj1[i] === obj2[j]) {
                count++;
            }
        }
    }
    if (count === obj1.length)
    {
        return true;
    }
    else
    {
        return false;
    }
}
const object1 = {
    b: 1,
    a: 2,
    c: 5
};
const object2 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(task4(object1, object2));