console.log("Welcome to tut33");

let regex = /harryfgds/;
// Lets look into some metacharacter symbols
regex = /^harry/; // ^ means expression will match if string starts with
regex = /rry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; // . means matches any one character
regex = /h*rry/;// * means matches any 0 or more characters
regex = /ha?rryi?t/; // ? after character means that character is optional
regex = /h\*rry/

let str = "harry";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}




































