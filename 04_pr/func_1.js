function task1(mass, num)
{
    let count = 0;
    for (let i = 0; i < mass.length; i++)
    {
        for (let j = 0; j < mass.length; j++)
        {
            if (i !== j)
            {
                if(mass[i] + mass[j] === num)
                {
                    count++;
                }
            }
        }
    }
    if (count > 0)
    {
        return true;
    }
    else
    {
        return false;
    }

}
let mass = [9, 1, 2, 4];
let num = 8;
console.log(task1(mass, num));