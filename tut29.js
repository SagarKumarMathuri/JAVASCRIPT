console.log("Welcome to tut29");

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content 
let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "dele.txt";
//     fetch(url).then((response)=>{
//         console.log("inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("inside second then")
//         console.log(data);
//     })
// }
// 
// console.log("Before running getData")
// getData()
// console.log("After running getData")

function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users";
      fetch(url).then((response)=>{
            console.log("inside first then")
        return response.json();
    }).then((data)=>{
            console.log("inside second then")
        console.log(data);
    })    
    

}
console.log("Before running getData")
getData()
console.log("After running getData")


function postData(){
    url = "https://api.github.com/users";
      fetch(url).then((response)=>{
            return response.json();
    }).then((data)=>{
            console.log(data);
    })    
}
postData();













