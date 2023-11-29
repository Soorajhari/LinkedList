// let str = ["malayalam"];
// for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//   if (str[i] == str[j]) {
//   } else {
//     console.log("not palindrome");
//   }
// }
function isPalindrome(arr) {
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    const leftStr = arr[i];
    const rightStr = arr[len - 1 - i];
    const strLen = leftStr.length;
    for (let j = 0; j < strLen; j++) {
      if (leftStr[j] !== rightStr[strLen - 1 - j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isPalindrome("malayalam"));

let arr4 = [54, 65, 43, 22, 56, 40];
let temp;
for (let i = 0; i < arr4.length - 1; i++) {
  for (let j = i + 1; j < arr4.length; j++) {
    if (arr4[i] < arr4[j]) {
      temp = arr4[i];
      arr4[i] = arr4[j];
      arr4[j] = temp;
    }
  }
}

console.log(arr4);
