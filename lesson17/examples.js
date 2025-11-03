// function User(name) {
//   this.name = name;
// }

// const user = new User("Anton");

// class User2 {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const user2 = new User2("Anton");

// console.log(user2);
// console.log(typeof user2);
// console.log(typeof User2);

// class User {
//   constructor(name) {
//     console.log("constructor");
//     this.name = name;
//   }

//   sayHi() {
//     console.log("Hi!");
//   }
// }

// const user = new User('DFdsf')
// user.sayHi()
// console.log(User.prototype)

// class UserClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`${this.name}: - Hi!`)
//     }
// }

// const userClass = new UserClass('Anton', 30);
// for (const key in userClass) {
//     console.log(key)
// }

// function UserFunc(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function () {
//     console.log(`${this.name}: - Hi!`);
//   };
// }

// const userFunc = new UserFunc("Anton", 30);
// for (const key in userFunc) {
//   console.log(key);
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     console.log("Here");
//     return this._name;
//   }

//   set name(value) {
//     console.log("setter");
//     if (value.length < 2) {
//       console.log("too short name");
//     } else {
//       this._name = value;
//     }
//   }
// }

// const user1 = new User("Anton");
// console.log(user1.name);

// const user2 = new User("Ян");
// console.log(user2.name);

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed: ${this.speed}`);
  }
}

const animal = new Animal("IT");
animal.run(10);

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} is hidden`);
  }
}

const rabbit = new Rabbit("Rabbit");
rabbit.hide();
rabbit.run();
