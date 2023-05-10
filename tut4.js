console.log("we are at tut4");

const name = 'sagar';
const greeting = 'Good Morning';
//console.log(greeting + ' ' + name);

let html;
html = "<h1> this is heading</h1>"+
       "<p> this is My para</p>";
html = html.concat('this', ' srt2');
console.log(html);
//console.log(html.length);
//console.log(html.toLowerCase());
//console.log(html.toUpperCase());

//console.log(html[1]);
//console.log(html.indexOf('<'));
//console.log(html.lastIndexOf('<'));
//console.log(html.charAt(3));
//console.log(html.endsWith('srt2'));
//console.log(html.includes('is'));
//console.log(html.substring(1,6));
//console.log(html.slice(0,7));
//console.log(html.split(' '));
// console.log(html.replace('this','it'));

let fruit1 = 'orange';
let fruit2 = 'apple';
let myHtml = `Hello ${name}
           <h1> This is heading </h>
           <p> You like ${fruit1} and ${fruit2}

             `;

document.body.innerHTML = myHtml;             