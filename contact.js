var Contact = {}

Contact.parseName = function (str) {
    // str is a string containing the name and phone number separated by comma
    // extract and return the name from the str argument
    // str will always contain only one comma character
    return str.split(',')[0];
}

Contact.parseNumber = function (str) {
    return str.split(',')[1];
}

module.exports = Contact
