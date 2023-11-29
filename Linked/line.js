class news {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class node {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(value) {
    let newnode = new news(value);
    if (this.head == null) {
      this.head = newnode;
      return;
    } else {
      let temp = this.head;

      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newnode;
    }
  }
  dele(value) {
    let temp = this.head;
    let prev = null;

    if (temp != null && temp.value == value) {
      this.head = temp.next;
      return;
    }
    while (temp != null) {
      if (temp.value == value) {
        prev.next = temp.next;
      }
      prev = temp;
      temp = temp.next;
    }
  }

  rev() {
    let curr = this.head;
    let prev = null;
    let after;
    while (curr != null) {
      after = curr.next;
      curr.next = prev;
      prev = curr;
      curr = after;
    }
    this.head = prev;
  }

  insert(value, pos) {
    let i = 1;
    let nodeing = new news(value);
    let temp = this.head;
    if (pos == 1) {
      nodeing.next = this.head;
      this.head = nodeing;
      return;
    }
    while (temp != null && i < pos - 1) {
      temp = temp.next;
      i++;
    }
    if ((temp = null)) {
      return;
    }
    nodeing.next = temp.next;
    temp.next = nodeing;
  }
  prie() {
    let temp = this.head;
    let flag = 0;
    while (temp != null) {
      flag = 0;
      for (let j = 2; j < temp.value; j++) {
        if (temp.value % j == 0) {
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        console.log(temp.value);
      }
      temp = temp.next;
    }
  }
  odd(value) {
    let temp = this.head;

    while (temp != null) {
      if (temp.value % 2 == 0) {
        console.log(temp.value);
      }
      temp = temp.next;
    }
  }

  unique() {
    let temp = this.head;
    let count = 0;
    let uniqueValues = [];
    while (temp != null) {
      count = 0;
      for (let i = 0; i < uniqueValues.length; i++) {
        if (uniqueValues[i] == temp.value) {
          count++;
          break;
        }
      }
      if (count == 0) {
        console.log(temp.value);
        uniqueValues.push(temp.value);
      }
      temp = temp.next;
    }
  }

  dispaly() {
    if (this.head == null) {
      console.log("empty");
    }
    let temp = this.head;
    while (temp != null) {
      console.log(temp.value);
      console.log();
      temp = temp.next;
    }
  }
}

let set = new node();
// set.add(9);
// set.add(3);
// set.add(5);
// set.add(3);
// set.add(9);
// set.add(11);
// set.add(160);
// set.add(11);
// set.odd();
// set.unique();
// set.dele(160);
// set.dispaly();
set.prie();
// set.insert(500, 3);
// set.insert(600, 7);
// set.insert(700, 1);
// set.rev();
let arr = [3, 4, 5, 6, 7, 8];
for (i = 0; i < arr.length - 1; i++) {
  set.add(arr[i]);
}
set.dispaly();
console.log(set);


