function task2()
{
    let g = [];
    for (let i = 0; i <= 15; i++)
    {
        for (let j = 0; j < 20; j++)
        {
            if (i === 15 && j === 15)
            {
                g[0] = i;
                g[1] = j - 1;
                break;
            }
        }
    }
    return g;
}
console.log(task2());
module.exports = task2;