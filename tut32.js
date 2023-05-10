console.log("Welcome to tut32");
let reg = /harry/; // This is a regular expression literal in js
reg = /harry/g; // g means global
//reg = /harry/i; // i means case insensitive

//console.log(reg);
//console.log(reg.source);

let s = "This is great code with harry and also harry bhai";
// Function to match expressions
// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
//console.log(result);
//console.log(result.input);
//console.log(result.index);
//result = reg.exec(s);
//console.log(result); ----> we can use multiple exec with global flag
//result = reg.exec(s);
//console.log(result);

//if (result) {
//    console.log(result);
//    console.log(result.input);
//    console.log(result.index);
//}

// 2. test() - Returns true or false 
let result2 = reg.test(s);
// console.log(result2) ---> This will only print true if the "reg" is there in the string "a"


// 3 . match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is Wrong! !
let result3 = s.match(reg) // ---> This is Right!
//console.log(result3);

// 4. Search() - Returns index of first match else -1
//let result4 = reg.search(s) ---> This is Wrong! !
let result4 = s.search(reg) // ---> This is Right!
//console.log(result4)

// 5. replace() -- Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, "SAGAR");
console.log(result5);


















