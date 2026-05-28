// Palindrome

let text = "madam";

function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  console.log("rev value", rev);

  return rev == text;
}
console.log("output", isPalindrome(text));
