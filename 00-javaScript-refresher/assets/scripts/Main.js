//import { apiKey, abc } from "./util.js";
// for import and export keywords type = module necessary in script tag
//import apiKey from "./util.js"; //default

// import * as util from "./util.js";   // grouping multiple keys in one object

// console.log(util); // returns js object 
// console.log(util.abc)
// console.log(util.apiKey);
// console.log(util.default);

// import { apiKey, abc as content } from "./util.js";  // if i don't like the name abc i can change it here

// console.log(content);

// Objects and classes
// const user = {
//     name: "Hi, Its me",
//     age: 33,
//     greet() {
//         console.log("I'm the problem !");
//         console.log(this.age);
//     }
// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// user.greet();


// class Users {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log("I'm the problem !");
//     }
// }

// const user1 = new Users("Lana", 37)
// console.log(user1)
// user1.greet();

const hobbies = ["gym", "running", "reading", "cooking"];
console.log(hobbies[2]);

hobbies.push("working");
console.log(hobbies)

const index = hobbies.findIndex((item) => item === "reading")
console.log(index)

const map = hobbies.map((item) => item + "!!!");
const map1 = hobbies.map((item) => ({text: item}));
console.log(map)
console.log(map1)