function bind(obj)
{
    let sum = func(obj);
    sum += 300;
    return sum;
}
function func(obj)
{
    let a2 = obj.a;
    let b2 = obj.b;
    return a2 + b2;
}
module.exports = bind;
module.exports = func;

