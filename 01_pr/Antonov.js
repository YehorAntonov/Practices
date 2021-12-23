function isPalindrom(str)
{
    let string = str.split('').reverse().join('');
    if (str === string)
    {
        console.log('True');
    }
    else
    {
        console.log('False')
    }
}
let str = 'tenet';
console.log(isPalindrom(str));
//////////////////////////////
function checkString(str)
{
    if (typeof str !== 'string')
    {
        console.log('Incorrect input data');
    }
    else
    {
        let length = str.length;
        if (length < 2 || length > 20)
        {
            return 'INVALID';
        }
        else
        {
            str = str.split('');
            if (str.indexOf('-') === 0 || str.indexOf('?') === 0 || str.indexOf('!') === 0 || str.indexOf(':') === 0 || str.indexOf('.') === 0 || str.indexOf(',') === 0 || str.indexOf('') === 0 || str.indexOf(' ') === 0)
            {
                return 'INVALID';
            }
            if (str.indexOf('0') === 0 || str.indexOf('1') === 0 || str.indexOf('2') === 0 || str.indexOf('3') === 0 || str.indexOf('4') === 0 || str.indexOf('5') === 0 || str.indexOf('6') === 0 || str.indexOf('7') === 0 || str.indexOf('8') === 0 || str.indexOf('9') === 0)
            {
                return 'INVALID';
            }
            let str2 = str[0].toUpperCase();
            if (str[0] !== str2)
            {
                return 'INVALID';
            }
            else
            {
                let tr = false;
                for (let i = 1; i < str.length; i++)
                {
                    if (str[i] === '?' || str[i] === '!' || str[i] === ':' || str[i] === ',' || str[i] === '.' || str[i] === '' || str[i] === ' ' || str[i] === '-')
                    {
                        tr = true;
                    }
                }
                if (tr === true)
                {
                    return 'VALID';
                }
                else
                {
                    return 'INVALID';
                }
            }

        }

    }
}
let str = 'G3fhi?ji.j';
console.log(checkString(str));
//////////////////////////////
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
let str = '75';
let num = 15;
console.log(isMath(str, num));
//////////////////////////////
function checkNumber(num)
{
    let result = [ , , ];
    if (num < 0)
    {
        result[0] = false;
        if (num % 10 === 0)
        {
            result[2] = true;
        }
        else
        {
            result[2] = false;
        }
        if (num % 2 === 0)
        {
            result[1] = true;
        }
        else
        {
            result[1] = false;
        }
        return result;
    }
    else
    {
        if (num === 0)
        {
            result[0] = false;
            result[1] = true;
            result[2] = false;
            return result;
        }
        if (num === 2)
        {
            result[0] = true;
            result[1] = true;
            result[2] = false;
            return result;
        }
        for ( let i = 2; i < num; i++)
        {
            if (num % i === 0)
            {
                result[0] = false;
                break;
            }
            else
            {
                result[0] = true;
            }
        }
        if ( num % 2 === 0)
        {
            result[1] = true;
        }
        else
        {
            result[1] = false;
        }
        if ( num % 10 === 0)
        {
            result[2] = true;
        }
        else
        {
            result[2] = false;
        }
        return result;

    }
}
let num = 50;
console.log(checkNumber(num));