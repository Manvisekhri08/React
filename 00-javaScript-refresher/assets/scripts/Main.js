//import { apiKey, abc } from "./util.js";

//import apiKey from "./util.js"; //default

import * as util from "./util.js";   // grouping multiple keys in one object

console.log(util); // returns js object 
console.log(util.abc)
console.log(util.apiKey);
console.log(util.default);

// import { apiKey, abc as content } from "./util.js";  // if i don't like the name abc i can change it here

// console.log(content);