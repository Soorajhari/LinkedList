let arr0 = [1, 2, 3, 4, 5];
let set = arr.map((item) => {
  return item * 2;
});

console.log(set);

let arrs = ["aaaaa"];
let sets = arrs.map((item) => item.toUpperCase());

console.log(sets);

let soo = ["alice", "news", "haha"];

let con = soo.map((item) => ({
  item,
}));

console.log(soo);

const number = [123, 455, 789];
const pow = number.map((item) => {
  let sum = 0;
  while (item > 0) {
    sum += item % 10;
    item = Math.floor(item / 10);
  }
  return sum;
});

console.log(pow);

const put = [12, 2, 3, 4, 5];
const size = put.filter((item) => {
  return item % 2 == 0;
});
console.log(size);


for (i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr.length--;
console.log(arr);

let res1 = arr.splice(pos, 0, ele);
console.log(res);

let arr4 = [1, 2, 3, 4, 5];
let pos = 3;
let ele = 10;

arr.splice(pos, 0, ele);

console.log(arr);

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}


let arr = [1, 2, 3, 45, 5];

let res = arr[3];
console.log(res);

function search(arrs, target) {
  for (let i = 0; i < arrs.length - 1; i++) {
    if (arrs[i] == target) {
      return i;
    }
  }
}

console.log(search([1, 2, 3, 4, 5], 4));

let arri = [34, 65, 98, 12, 87, 32];
let temp = 0;

for (let i = 0; i < arri.length - 1; i++) {
  for (let j = i + 1; j < arri.length; j++) {
    if (arri[i] < arri[j]) {
      temp = arri[i];
      arri[i] = arri[j];
      arri[j] = temp;
    }
  }
}

console.log(arri);




for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    arr[i][j] = i * j;
  }
}

console.log(arr);

let n = 10;
let arr3 = new Array(n);

for (let i = 0; i < n; i++) {
  arr[i] = new Array(n);
  for (let j = 0; j < n; j++) {
    arr[i][j] = new Array(n);
    for (let k = 0; k < n; k++) {
      arr[i][j][k] = i * j * k;
    }
  }
}

console.log(arr);

let nom = 3;

for (i = 1; i <= nom; i++) {
  for (j = 1; j <= nom; j++) {
    for (k = 1; k <= nom; k++) {
      console.log("x");
    }
  }
  console.log("\n");
}
