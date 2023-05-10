console.log("welcome to tut6");
const age = 234;
const doesdrive = true;
//const vari = 33;

//if (age!=21)
//{
//    console.log('age is not 21')
//}
//else if(age === 22){
//    console.log('age is 22')
//}
//else{
//    console.log('age is not 21')
//}

//if(typeof vari !== 'undefined'){
//    console.log('vari is defined');
//}
//else{
//    console.log('vari is not defined');
//}

//if (doesdrive || age>18){
//    console.log("you can drive");
//}
//else{
//    console.log("you can not drive");
//}

//console.log(age==45? 'age is 45':'age is not 45');

switch (age) {
    case 18:
        console.log("age is 18");
        break;
    case 28:
        console.log("age is 28");
        break;
    case 38:    
        console.log("age is 38");
        break;
    default:
        console.log("your age is unknown");
        break;
}