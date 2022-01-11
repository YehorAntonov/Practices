class Validator {
    isEmail(email){
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
    }

    isDomain(domain){
        return /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/.test(domain);
    }

    isDate(date) {
        const arrayDate = String(date).split(".");
        if (arrayDate.length !== 3) {
            return false;
        }

        const stringDate = arrayDate[2] + '-' + arrayDate[1] + '-' + arrayDate[0];

        return String(new Date(stringDate)) !== 'Invalid Date';
    }

    isPhone(phone){
        return /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(phone);
    }
}


var validator = new Validator();


module.exports = validator;