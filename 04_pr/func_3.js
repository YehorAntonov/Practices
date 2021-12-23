function task3(mass)
{
    let size = 2;
    let alt = [];
    for (let i = 0; i < Math.ceil(mass.length / size); i++)
    {
        alt[i] = mass.slice((i*size), (i*size) + size);
    }
    return alt;
}
let mass = [1, 2, 3, 4, 5, 6, [7, 8]];
console.log(task3(mass));