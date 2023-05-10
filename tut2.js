/*
DATA TYPES IN JS
1.PRIMITIVE DATA TYPE
  HERE MEMORY LOCATION IN STACK
    a. string
    b. numbers
    c. boolean
    d. null
    e.undefined
    f.symbol
2.REFERENCE DATA TYPE
 HERE MEMORY LOCATION IN HEAP
    a. arrays
    b.object literals
    c.functions
    d.dates
*/

//primitive data types
// string
console.log('this is tut2')
let name = "sagar";
console.log("My string is "+ name);
console.log("Data type is " + (typeof name));

//Number
let marks = 45;
console.log("Data type is " + (typeof marks));

//Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

//null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

//undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [2, 3, 4, 5, false, "string"];
console.log("Data type is " + (typeof myarr));

//object Literals
let stMarks = {
  vicky: 30,
  Shubham: 56,
  Dhanraj: 90
}
console.log( typeof stMarks);

function findName() {
   
}
console.log( typeof findName);














