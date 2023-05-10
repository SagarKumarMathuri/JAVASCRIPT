console.log("Welcome to tut35");

// Character classes
let regex = /\war/;  // word character - _ or alphabet or numbers
regex = /\w+dir/;    // \w+ means one or more word characters
regex = /\Wbhai/;   // Non word character
regex = /\W+bhai/;  // \w+ means more than one non word character
regex = /number \d999/;    // \d mean digit
regex = /number \d+/ // \d+ means more than one digit
regex =  /\D999/;    // \D means Non digit
regex =  /\D+999/;    // \D+ means more than one non digit
regex = /\ska number/; // Match whitespace character
regex = /\s+ka number/; // \s+means match  one or more than one whitespace character
regex = /\Ska number/ ; // Match non whitespace character
regex = /\S+ka number/ ; // Match one or more than one non whitespace character
regex = /3r4r\b/ ; // word bounary

// Assertions
regex = /h(?=y)/;
regex = /h(?!y)/
str = "har1dirr3r4r y$#@%%bhai hrryka number 39999999harry999";
let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


































