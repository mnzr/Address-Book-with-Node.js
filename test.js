var Contact = require('./contact')
var MyParrot = require('./parrot')


// console.log( MyParrot.speakEnglish() )
// console.log( MyParrot.speakSpanish() )

var name = Contact.parseName("John Smith,604-123-9090")
console.log(name) // -> should print "John Smith"

