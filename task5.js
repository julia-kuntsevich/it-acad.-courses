//#1
// string + boolean
let string = "ojhuil";
let bool = true;
console.log(string + bool);

//string + number
let num = 3410;
console.log(string + num);

//number + boolean
console.log(bool + num);

//#2
console.log(string * bool);
console.log(string * num);
console.log(num * bool);

//#3
console.log(string / bool);
console.log(string / num);
console.log(num / bool);

//#4

console.log(typeof Number(string));
console.log(typeof String(num));
console.log(typeof Boolean(num));
console.log(typeof Boolean(string));
console.log(typeof String(bool), String(bool));