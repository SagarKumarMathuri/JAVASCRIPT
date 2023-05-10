console.log('welcome to tut12');


//let cont = document.querySelector('.no');
//cont = document.querySelector('.container');
//let nodeName = cont.childNodes[3].nodeName;
//let nodeType = cont.childNodes[3].nodeType;
//console.log(nodeName);
//console.log(nodeType);


// Node Type
// 1.Element
// 2. Attribute
// 3. Text Node
// 8. comment
// 9. documnet
// 10. docType


//console.log(cont.childNodes);
//console.log(cont.children);


let container = document.querySelector('div.container');
//console.log(container.children[3].children[1].children);

//console.log(container.firstChild)
//console.log(container.firstElementChild)

//console.log(container.lastChild)
//console.log(container.lastElementChild)

//console.log(container.childElementCount) // count of child Elements
//console.log(container.children)

console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)








