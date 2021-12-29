function repeat(arr)
{
    let arr2 = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr2.includes(arr[i]) === false)
        {
            arr2.push(arr[i]);
        }
    }
    arr = arr2;
    return arr;
}
let arr = [1, 2, 3, 1, 2, 4, 2, 5, 5, 5, 3, 2, 7];
console.log(repeat(arr));
module.exports = repeat;