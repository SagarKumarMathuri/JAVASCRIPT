console.log('Welcome to tut20');
let car = {
    name:'Maruti 800',
    topSpeed:90,
    run:function run(){
        console.log("car is running");
    }
}
// We have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`)
    }
}
car1 = new GeneralCar('Nissan', 130);
car2 = new GeneralCar('Marutu Alto', 30);
car3 = new GeneralCar('Mercedes', 200);
console.log(car1, car2, car3);