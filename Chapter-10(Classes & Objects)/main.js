// const employee = {
//   calctax() {
//     console.log("tax is 10%");
//   },
// };

// const karan = {
//   salary: 50000,
// };

// employee.calctax();
// //inherit employee object in karan
// karan.__proto__ = employee;
// karan.calctax();

//TODO: Class

class car {
  hello(car) {
    console.log(`I am ${car}`);
  }
}

class toyota extends car {
  //its called automatically as soon as object is created
  constructor() {
    super();
    console.log("constructor called");
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new toyota();
fortuner.hello("fortuner");
// let lexus = new toyota();
// console.log(fortuner); //toyota {}
// fortuner.start(); //start
// console.log(typeof fortuner); //object
