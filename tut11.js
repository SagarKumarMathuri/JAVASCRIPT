console.log('welcome to tut11');
/*
element selectors:
1. Single element selector
2. Multi element selector

*/

// Single element selector
let element = document.getElementById('myfirst');
//element = element.className
//element = element.childNodes;
//element = element.parentNode;
element.style.color = 'red';
element.innertext = 'Sagar is good boy';
element.innerHTML = '<b>Sagar is good boy</b>';
//console.log(element.innerHTML);


let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
//console.log(sel)

// Multi element selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems)
Array.from(elems).forEach(element =>{
    console.log(element);
    element.style.color = 'blue';
})
//console.log(elems[0].getElementsByClassName('child'));


