function sayHello() {
  // normal function
  console.log("say HI ");
}
sayHello();
// function with argument

function sum(a, b) {
  console.log("sum is ", a + b);
}
sum(5, 10);

// function with return type

function multi(a, b) {
  return a * b;
}
let sumValue = multi(5, 10);
console.log("product is ", multi(40, 2));

//function expression

let HeyHello = function () {
  console.log("Say Hi");
};
HeyHello();

// function expression with argument

let add = function (a, b) {
  console.log("sum is ", a + b);
};
add(5, 10);

//function expression with return value

let addValue = function (a, b) {
  return a + b;
};
let addition = addValue(10, 20);
console.log("added value is ", addition);
