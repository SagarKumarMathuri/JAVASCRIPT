console.log("this is Tutorial23");

class Employee {
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogen(){
        return `I am ${this.name} and this companey is the best`;
    }
    joiningYear(){
        return 2020 - this.experience;
    }
    static add(a, b){
       return a + b;
    }

}
//harry = new Employee("Harry", 34, "dsa");
//console.log(harry.joiningYear());
//console.log(Employee.add(34, 3));
class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }
    static multiply(a, b){
        return a * b ;
    }

}

rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420");
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.multiply(3, 5));













