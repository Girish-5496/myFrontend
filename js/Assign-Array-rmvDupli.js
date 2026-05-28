// write a program to remove duplicate from the given array

let arr = [9, 0, 0, 8, 9, 1, 3, 3, 4, 8];

function printUniq(ar) {
  let rmvDupli = [];

  for (let i = 0; i < ar.length; i++) {
    if (rmvDupli.indexOf(ar[i]) == -1) {
      rmvDupli.push(ar[i]);
    }
  }
  return rmvDupli;
}
let uniqvalue = printUniq(arr);
console.log(uniqvalue);
