function isPalindrom(str)
{
    let string = str.split('').reverse().join('');
    if (str === string)
    {
        return true;
    }
    else
    {
        return false;
    }
}
module.exports = isPalindrom;