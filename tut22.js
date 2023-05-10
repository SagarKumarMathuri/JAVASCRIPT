console.log("Welcome to tut22");

const proto = {
    slogan: function(){
        return `This company is the best`;
    },
    changeName: function(newName){
        this.name = newName
    }
}
/*
// This creates harry object

const harry = Object.create(proto);
harry.name = "harry"
harry.role = "Programmer";
harry.changeName("harry2")
console.log(harry);*/

// This also creates harry object
const harry1 = Object.create(proto, {
     name: {value: "harry", writable: true},
     role: {value: "Programmer"},
})
harry1.changeName("harry2")
//console.log(harry1);

// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;

}
// Slogan 
Employee.prototype.slogan = function (){
    return `This company is the best . Redards, ${this.name}`;
}
// Create an object from this constructor now
let harryObj = new Employee("Harry", 342522, 56);
console.log(harryObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor 
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);















