class newnode {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class onetime {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
  }

  addnode(data) {
    let news = new newnode(data);
    if (this.head == null) {
      this.head = newnode;
    } else {
      this.tail.next = news;
    }
    this.tail = news;
  }

  display() {
    if (this.head == null) {
      console.log("empty");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
  delete(value) {
    let temp = this.head;
    let prev = null;
    if (temp == null) {
      return;
    }
    if (temp != null && temp.value == value) {
      this.head = temp.next;
      return;
    } else {
      while (temp != null && temp.value != value) {
        prev = temp;
        temp = temp.next;
      }
      prev.next = temp.next;

      if (temp == this.tail) {
        this.tail = prev;
        this.tail.next = null;
        return;
      }
    }
  }
}

let one = new onetime(200);
one.addnode(120);
one.addnode(130);
one.addnode(140);
one.display();
one.delete(140);
console.log(one);

function sum(a, b) {
  let result = a + b;
}
return result;
console.log(sum(2, 3));

function findFirstEvenNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      return numbers[i];
    }
    return -1;
  }
}

console.log(findFirstEvenNumber([3, 4, 5, 6]));

function isPositive(number) {
  if (number > 0) {
    return true;
  }
  // This return statement is outside the if condition
  return false;
}
console.log(isPositive(-1));

let n;
let sum = 0;

n = prompt("Enter the number of elements: ");

// Dynamically allocate memory for n integers
let arr2 = new Array(n);

// Initialize the array with random values
for (let i = 0; i < n; i++) {
  sum += arr[i];
}

// Print the array to the console
console.log("The array is: " + arr);

let arr = [];
function maxmin(arr) {
  let big = arr[0];
  let small = arr[0];
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > big) {
      big = arr[i];
    } else if (arr[i] < small) {
      small = arr[i];
    }
  }
  return [big, small];
}

console.log(maxmin([2, 4, 7, 9, 2]));
let last = -1;
function index(arr, target) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
}

console.log(index([2, 3, 4, 5, 6], 4));

function reve(str) {
  let some = "";
  for (i = str.length; i > 0; i--) {
    some += str[i];
  }
  return some;
}

console.log(reve("stringnjanvannu"));

const fruits = ["ssss", "weeerr", "fdsasd", "jjjjjj"];
const news = fruits.toString();
console.log(news);

const ansns = "sooraj hari";
const asvs = ansns.split(" ", 1);

console.log(asvs);

function palindrome(arr) {
  let str = "";
  for (i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] === arr[j]) {
      str = true;
    } else {
      return false;
    }
  }
  return str;
}

console.log(palindrome("radar"));

class last1 {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class noding {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
  }

  addnode(data) {
    let news = new last(data);
    if (this.head == null) {
      this.head = news;
    } else {
      if (this.head != null) {
        this.tail.next = news;
      }
      this.tail = news;
    }
  }

  delete(value) {
    let temp = this.head;
    let prev = null;
    if (temp != null && temp.value == value) {
      temp = temp.next;
    }
    if (temp == null) {
      return;
    }
    while (temp != null && temp.value != value) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = temp.next;
  }

  insert(data, nextTo) {
    let newing = new last(data);
    let temp = this.head;
    while (temp != null && temp.value != nextTo) {
      temp = temp.next;
    }
    if (temp == null) {
      return;
    }
    if (temp == this.tail) {
      this.tail.next = newing;
      this.tail = newing;
      return;
    }
    newing.next = temp.next;
    temp.next = newing;
  }

  display() {
    let temp = this.head;
    if (temp == null) {
      console.log("empty");
      return;
    }
    while (temp != null) {
      console.log(temp.value);

      temp = temp.next;
    }
  }
}

let set = new noding(120);
set.addnode(230);
set.addnode(250);
set.addnode(270);
set.delete(250);
// set.insert(400, 250);
set.display();

