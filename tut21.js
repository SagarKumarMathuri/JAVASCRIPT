console.log('Welcome to tut21');

// object Literal : object prototype
let obj = {
    name: "sagar",
    channel: "code with harry",
    address: "moon"

}
function Obj(givenName){
    this.name = givenName
}
Obj.prototype.getName = function (){
    return this.name;
}
Obj.prototype.setName = function (newName){
 this.name = newName;
}

let obj2 = new Obj("sagar");
console.log(obj2)