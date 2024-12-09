console.log('ass12345');

// console.log(a);

// let a = 1

let user = {
  firstName: "vasya",
  sayHi() {
    console.log(`Hi, ${this.firstName}!`);
  }
};

// console.log(user.sayHi());
user.sayHi()

setTimeout(user.sayHi, 500); // Привет, undefined!


