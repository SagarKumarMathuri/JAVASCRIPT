console.log("Welcome to tut39");
// Map in Javascript: We can use any type of key or value

const myMap = new Map();

const key1 = 'mystr', key2 ={}, key3 = function(){};

// Setting map vaiues
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

// // Getting the vaiues from a Map
// let value3 = myMap.get(key3);
// console.log(value3);
// 
// let value2 = myMap.get(key2);
// console.log(value2);
// 
// let value1 = myMap.get(key1);
// console.log(value1);
// 
// // Get the size of the map
// console.log(myMap.size);
// 
// // You can loop using for..of to get keys and values
// for (let [key, value] of myMap) {
//     console.log(key, value);
// }
// 
// // Get only keys 
// for (let key of myMap.keys()){
//     console.log('key is ', key);
// }
// 
// // Get only value
// for (let value of myMap.values()){
//     console.log('value is ', value);
// }
// 
// // You can loop through a map using for each loop
// myMap.forEach((value, key)=>{
//     console.log('key is ', key);
//     console.log('vaule is ', value);
// })

// Converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);

// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is ', myKeysArray);

// Converting map value to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to  values array is ', myValuesArray);








