// type conversion and type coercion
console.log('welcome to tut3');
let myVar;
myVar = String(34);
//console.log(myVar, (typeof myVar));

let booleanVar = String(true);
//console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
//console.log(date, (typeof date));

let arr = String([1,2,3,4,5,6]);
//console.log(arr.length, (typeof arr));

let i = 34;
//console.log(i.toString());

let stri = Number("2343");
stri = Number("f2344");
stri = Number(true);
stri = Number([2,3,4,5,6]);
//console.log(stri, (typeof stri));

let number = parseFloat('32.788');
//console.log(number.toFixed(45), (typeof number));

// Type coercion 

let mystr = Number("342");
let mynum = 342;

console.log(mystr + mynum);