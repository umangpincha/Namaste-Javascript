//TODO:

// Q1
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Website Viewed");
  }
}

const user1 = new User("Umang", "up@gmail.com");
// console.log(user1.name);
// console.log(user1.email);

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    console.log("Data Edited");
  }
}

const admin1 = new Admin("Guddu", "guddu@123");
admin1.editData();
console.log(admin1.name);
console.log(admin1.email);
