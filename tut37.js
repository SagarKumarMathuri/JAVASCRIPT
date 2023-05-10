console.log("Welcome to tut37")

// Generators in javascript
// 1 - 2B

function* numbersGen(){
    let i = 0;

    // yield  1;
    // yield  2;
    // yield  3;
    // yield  4;
    while(true){
      //  yield (i++).toString();
        yield (i++)
    }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



















