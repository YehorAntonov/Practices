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
module.exports = checkNumber;