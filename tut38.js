console.log("Welcome to tut38");

// for-in and for-of loops
// Traditional for loop
//people = ["Harry", "Rohan", "Saurav", "Gaurav", "Vinod"];
//for (let index = 0; index < people.length; index++) {
//    const element = people[index];
//    console.log(element)
//}

// 1.ITERATING AN OBJECT
obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "Web Develpment"
}
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
//for (let index = 0; index < Object.keys(obj).length; index++) {
//       const element = obj[Object.keys(obj)[index]];
//        console.log(element)
//}

//1.2 Iterating an object using  for-in loop:
for (let key in obj){
    console.log(obj[key]);
}

// 1. ITERATING A STRING 
// we can use for in with strings to loop through all the characters
myString = "This is my string";
for (let char in myString){
    console.log(myString[char]);
}


// ********************For of loop*******************
console.log("**********For of loop starts here *************");
people = ["Harry", "Sohan", "Mohan", "Rohan", "Vikrant"];
for(let name of people){
     console.log(name);
}

for(let name of myString){
    console.log(name);
}














