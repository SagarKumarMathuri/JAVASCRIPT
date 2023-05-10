console.log("Welcome to tut34");
// Regular Expression.
   // Basic functions
   // Metacharacter Sysbols

// Character Sets 
//const regex = /^h/i;

let regex = /h[a-z]rry/; // can be any character  from a to z
regex = /h[aty]rry/; // can be an a, t, or y
regex = /[^aty]rry/; // cannot be any of a, t, or y
regex = /h[^aty]rr[yYu]/; // cannot be any of a, t, or y + can be a u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/;// we can have as many character sets as we want

// Quantifiers sets - we use []
regex = /har{2}y/;// r can occur exactly 2 times
regex = /har{0,2}y/;// r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings - we use paranthesis for grouping ()
regex = /(har){2}([0-9]r){3}/

//const str = "hZrru4 bhai";
str = "harhar1r3r4rry bhai";
let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}