let str8 = "treehuishoqwertyui";
let count = 0;
let rev = "";
for (let i = str.length - 1; i > 0; i--) {
  rev += str[i];
}
console.log(rev);

let stri = "this is OUR culture";
let wrd = 0;
let i = 1;
for (i = 1; i < stri.length - 1; i++) {
  if (stri[i] == " " || stri[i] == "\t") {
    wrd++;
  }
}

console.log(wrd);

let nup = "V";

for (let i = 0; i < nup.length; i++) {
  let res = nup.charCodeAt(i);
  if (res >= 97 && res <= 122) {
    console.log("lowercase");
  } else {
    console.log("uppercase");
  }
}

let tre = " a country with lot of people";

for (let i = 0; i < tre.length; i++) {
  if (tre[i] == " " || tre[i] == "/t") {
    for (let j = 0; j < tre.length; j++) {
      console.log(tre[j]);
    }
  }
}


let str4 = "sreehari6padanilam";
let stra = str.split("");
let temp = "";
for (let i = 0; i < stra.length - 1; i++) {
  for (let j = i + 1; j < stra.length; j++) {
    if (stra[i] > stra[j]) {
      temp = stra[i];
      stra[i] = stra[j];
      stra[j] = temp;
    }
  }
}
let stri2 = stra.join("");
console.log(stri);

function transform(nu) {
  return nu.map((item) => {
    return { val: item };
  });
}
var res = transform([1, 2, 3, 4]);
console.log(res);

let stro = "this is a test string";
let count2 = 0;
let maxcount1 = 0;

for (let i = 0; i < stro.length - 1; i++) {
  for (let j = i + 1; j < stro.length; j++) {
    if (stro[i] == stro[j]) {
      count++;
    }
  }
    if (count2 > maxcount1) {
      maxcount1 = count2;
   }
}

console.log(count);

let str0 = "this is string one";
let str2 = "this is string two";
let n = str1.length + str2.length;
let str3 = "";
for (let i = 0; i < str1.length; i++) {
  str3 += str1[i];
}
for (let j = 0; j < str2.length; j++) {
  str3 += str2[j];
}
console.log(str3);

let str5 = "this is an out";
let upp = "";
for (let i = 0; i < str5.length; i++) {
  let low = str5.charCodeAt(i);
  low -= 32;
  upp += String.fromCharCode(low);
}
console.log(upp);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];
let mrge = [];
for (let i = 0; i < arr1.length; i++) {
  mrge.push(arr1[i]);
}

for (let j = 0; j < arr2.length; j++) {
  mrge.push(arr2[j]);
}
console.log(mrge);

let arr3 = [4, 92, 2, 8, 79, 3];

arr3.sort(function (a, b) {
  return a - b;
});

let sm = arr3[1];
let ll = arr3[arr3.length - 2];

console.log(sm, ll);

let arr = [4, 8, 1, 9, 6, 3];
let smallest = Infinity;
let secondSmallest = Infinity;
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    secondSmallest = smallest;
    smallest = arr[i];
  } else if (arr[i] < secondSmallest) {
    secondSmallest = arr[i];
  }

  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}

console.log("Second smallest: " + secondSmallest); // 3
console.log("Second largest: " + secondLargest); // 8

let arr6 = [4, 8, 1, 9, 6, 3, 4, 1, 9, 4];
let frequency = [];

// loop through the array
for (let i = 0; i < arr6.length; i++) {
  let element = arr6[i];
  // if the element is not in the frequency object, add it and set its count to 1
  if (!frequency[element]) {
    frequency[element] = 1;
  } else {
    // if the element is already in the frequency object, increment its count
    frequency[element]++;
  }
}

// print the frequency object
console.log(frequency);

let arr8 = [1, 2, 3, 4, 5];
let pos = 3;
let ele = 17;
for (i = arr8.length; i > pos - 1; i--) {
  arr8[i + 1] = arr8[i];
}
arr8[pos] = ele;
console.log(arr8);

let str = "malayalams";

let arr12 = str.split("");

console.log(arr12);

for (let i = 0; i < arr12.length / 2; i++) {
  if (arr12[i] !== arr12[arr12.length - 1-i]) {
    console.log(false);
    break;
  }
 
}
console.log(true);



let strs = "soorajohari";
let count1 = 0;
let max = "";
let maxcount = 0;

for (let i = 0; i < strs.length - 1; i++) {
  count = 1;
  for (let j = i + 1; j < strs.length; j++) {
    if (strs[i] == strs[j]) {
      count1++;
    }
  }
  if (count1 > maxcount) {
    maxcount = count1;
    max = strs[i];
  }
}

console.log(maxcount, max);
let str1 = "soorajhari";
let map = new Map();

for (const char of str1) {
  if (map.has(char)) {
    map.set(char, map.get(char) + 1);
  } else {
    map.set(char, 1);
  }
}

map.forEach((count, char) => {
  if (count > 1) {
    console.log("Character '" + char + "' repeated " + count + " times");
  }
});


