console.log('Welcome to tut17');
let impArray = ['adrak','aloo','bhindi'];

// add a key-value pair inside local Storage
localStorage.setItem('Name', 'rohit');
localStorage.setItem('Name2', 'sagar');
localStorage.setItem('sabji', 'impArray');



// Clears the entire local storage
// localStorage.clear();

// clear a  Particular key-value Storage
localStorage.removeItem('Name');

//  Retrieve an item from the local storage 
let name = localStorage.getItem('Name2');
console.log(name)

















