function checkString(str)
{
    if (typeof str !== 'string')
    {
        return 'Incorrect input data';
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
            if (str.indexOf('-') === 0 ||
                str.indexOf('?') === 0 ||
                str.indexOf('!') === 0 ||
                str.indexOf(':') === 0 ||
                str.indexOf('.') === 0 ||
                str.indexOf(',') === 0 ||
                str.indexOf('') === 0 ||
                str.indexOf(' ') === 0)
            {
                return 'INVALID';
            }
            if (str.indexOf('0') === 0 ||
                str.indexOf('1') === 0 ||
                str.indexOf('2') === 0 ||
                str.indexOf('3') === 0 ||
                str.indexOf('4') === 0 ||
                str.indexOf('5') === 0 ||
                str.indexOf('6') === 0 ||
                str.indexOf('7') === 0 ||
                str.indexOf('8') === 0 ||
                str.indexOf('9') === 0)
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
module.exports = checkString;