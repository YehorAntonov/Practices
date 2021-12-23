function task2(mass)
{
    let alt = [];
    for (let i = 0; i < mass.length; i++)
    {
        if (Array.isArray(mass[i]))
        {
            alt = alt.concat(task2(mass[i]))
        }
        else
        {
            alt.push(mass[i]);
        }
    }
    return alt;
}
let mass = [1, 2, 3, 4, [[5, 6], [7, 8]]];
console.log(task2(mass));