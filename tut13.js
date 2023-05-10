console.log("Welcome to tut13");

let element = document.createElement('li');
let text = document.createTextNode('I am a Text Node')
element.appendChild(text)
// Add a class name to the li element
element.className = 'child1'
element.id = 'createdLi'
element.setAttribute('title','mytitle');
//element.innerText = 'This is created by sagar';
//element.innerHTML = '<b>This is created by sagar</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element)
//console.log(ul)
//console.log(element);

let elem2 = document.createElement('h3')
elem2.id = 'elem2';
elem2.className = 'elem2'
let tnode = document.createTextNode('This is created by elem2');
elem2.appendChild(tnode)

element.replaceWith(elem2)
let myul = document.getElementById('myul')
myul.replaceChild(element, document.getElementById('fui'))
myul.removeChild(element, document.getElementById('lui'))

let pr = elem2.hasAttribute('href')
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelemen2title');
console.log(elem2, pr)





























