function task1(n)
{
    let result = [];
    for (let i = 1; i <= n; i++)
    {
        if (i % 3 === 0 && i % 5 !== 0)
        {
            result.push('three');
        }
        else if (i % 5 === 0 && i % 3 !== 0)
        {
            result.push('five');
        }
        else if (i % 3 === 0 && i % 5 === 0)
        {
            result.push('threeFive');
        }
        else
        {
            result.push(i);
        }
    }
    return result;
}
module.exports = task1;