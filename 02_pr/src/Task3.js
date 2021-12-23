function task3(str1, str2)
{
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let str3 = str1.split('');
    let str4 = str2.split('');
    for (let i = 0; i < str3.length; i++)
    {
        if (str3[i] === ' ' || str3[i] === '!' || str3[i] === '?' || str3[i] === ',' || str3[i] === '.')
        {
            str3.splice(i, 1);
        }
    }
    for (let i = 0; i < str4.length; i++)
    {
        if (str4[i] === ' ' || str4[i] === '!' || str4[i] === '?' || str4[i] === ',' || str4[i] === '.')
        {
            str4.splice(i, 1);
        }
    }
    let count = 0;
    if (str3.length === str4.length)
    {
        for (let i = 0; i < str3.length; i++)
        {
            for (let j = 0; j < str4.length; j++)
            {
                if (str3[i] === str4[j])
                {
                    count++;
                }
            }
        }
        if (count === str4.length)
        {
            return 'Строки являются анаграммами';
        }
        else
        {
            return 'Строки не анаграммы';
        }
    }
    else
    {
        return 'Строки не анаграммы';
    }

}
module.exports = task3;