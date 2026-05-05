/*
 ?  : ternary operator : decision making
?? : nullish coalescing operator
?. : optional chaining
*/

// ternary operator
let age = 18;
let result = age >= 18 ? "Adult" : "Not Adult";
console.log(result);

// nullish coalescing operator
// let name = "shuvo";
let name = null;
console.log(name ?? "name is not defined");
