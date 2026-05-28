let str = "hello morning";
let vowels = ["a", "e", "i", "o", "u"];

function countVowels(sentence) {
  let arr = sentence.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      count++;
    }
  }
  return count;
}

let op = countVowels(str);

console.log(op);
