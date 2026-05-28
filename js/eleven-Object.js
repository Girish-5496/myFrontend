let transaction = {
  upiId: "Giriv@axis",
  Mnumber: "9880813346",
};

console.log(transaction.upiId);
console.log(transaction["upiId"]);

transaction["Account"] = "ICICI"; // one way to add keys

console.log(transaction);

//object methods

console.log(Object.keys(transaction));
console.log(Object.values(transaction));

let obj1 = {
  name: "David",
  age: 20,
};

let obj2 = {
  name: "Jhonson",
  City: "Califonia",
};

Object.assign(obj1, obj2);

console.log(obj1);

// Create array of object
let trans = [
  { upi: "a", number: "22", status: "success" },
  { upi: "b", number: "22", status: "success" },
  { upi: "c", number: "22", status: "success" },
  { upi: "d", number: "22", status: "success" },
];

console.log(trans.length);

for (let i = 0; i < trans.length; i++) {
  console.log("value is ", trans[i]);
}

let transactions = [
  { upi: "a", number: "22", status: "success" },
  { upi: "b", number: "22", status: "failure" },
  { upi: "c", number: "22", status: "failure" },
  { upi: "d", number: "22", status: "success" },
];

for (let i = 0; i < transactions.length; i++) {
  let newArr = [];
  console.log("value is ", transactions[i].status);
  if (transactions[i].status == "failure") {
    newArr.push(transactions[i]);
  }
}
console.log(newArr);
