function isMath(str, num)
{
    str = parseInt(str);
    if (num % 3 === 0 && num % 5 === 0 && num % 15 === 0)
    {
        num = num * (-1);
        let sum = str + num;
        return sum;
    }
    else
    {
       let sum = str + num;
       return sum;
    }
}
module.exports = isMath;