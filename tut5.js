console.log('welcome to tut5');
// let dicuss about arrays

let marks = [23,63,65,45,67,55];
const fruits = ['apple','banana','pineapple'];
const mixed = ['str',34,[23,45,67]];

const arr = new Array(34,56,76,87,88,'orange');
//console.log(marks);
//console.log(mixed);
//console.log(fruits);
//console.log(arr.length);
//console.log(Array.isArray('frs'));
arr[0] = 'sagar';
let arrelement = arr[0];
//console.log('element :',arrelement);
//console.log(arr);

let value = marks.indexOf(63);
//console.log(value)

// Mutating or Modifying arrays
//marks.push(34)
//marks.unshift(221);
//marks.pop();
//marks.shift();
//marks.splice(1, 4);
//marks.reverse();
let marks2 = [1,2,3,4,5]
marks = marks.concat(marks2);
//console.log(marks);

let myobj = {
    'first name': 'sagar',
    channel: 'sagartube',
    isActive: 'true',
    marks: [1,2,3,4]
}
console.log(myobj);
console.log(myobj['first name']);
