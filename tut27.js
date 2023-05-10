// promise :
// - resolve
// - reject
// - pending

function func1(){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Functiom: Your promise has been resolved')
                resolve();
            }
            else{
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })


}
func1.then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(){
    console.log("Harry: Very bad bro: " + error)
})































