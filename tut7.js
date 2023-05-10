console.log("we are in tutorial 7");

//general loops: for,while,do-while
//let a = 34;
//a +=1;
//a++;
//console.log(a);

//for(let i=0; i<100;i++)
//{
//    console.log(i);
//}

//let j = 0;
//while(j<10){
//    console.log(j);
//    j++;
//}

//let k = 0;
//do{ 
//    console.log(k + 1);
//    if(k===5){
//        break;
//    }
//    k +=1;
//}while (k < 10);
let arr = [2,4,3,5,6,7,8,9];

//for (let i = 0; i < arr.length; i++) {
  //  const element = arr[i];
//    console.log(element);
//}
arr.forEach(function(element, index, array){
  console.log(element, index, array);
});

//let obj = {
 //   name: "sagar mathur",
   // age: 22,
  //  type: "Dangerous Programmer",
  //  os: "Ubuntu"
//}
//for(let Key in obj)
//{
//console.log(`The ${Key} of object is ${obj[Key]}`);
//}
//console.log("done");