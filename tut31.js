console.log('Welcome to My World');

let a = "Harry Bhai";
a = undefined;
if (a !=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}

try {
    //haskhashask
    console.log("We are inside try Block");
    //functionharry();
} catch (error) {
    console.log("Are you okey?");
    //console.log(error.name)
    console.log(error.message)
} finally {
    console.log("Finally we will run this")
}












