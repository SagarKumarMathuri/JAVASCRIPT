console.log('Welcome to tut19');

let today = new Date();
// console.log(today);
let otherDate = new Date('8-4-2003 04:32:02');
//otherDate = new Date('13 june 1920');
//otherDate = new Date('08/18/1234');
console.log(otherDate);
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
//a = otherDate.getSeconds();
//a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(6);
otherDate.setMonth(3);
otherDate.setFullYear(6344);
otherDate.setMinutes(34);
otherDate.setSeconds(30);
otherDate.setHours(21);
console.log(otherDate);
























