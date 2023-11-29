

class BinarySearch {
    constructor(array) {
      this.array = array;
      this.startIndex = 0;
      this.endIndex = array.length - 1;
    }
  
    search(target) {
      while (this.startIndex <= this.endIndex) {
        let middle = Math.floor((this.startIndex + this.endIndex) / 2);
        // console.log(middle)
        if (this.array[middle] === target) {
          console.log("Found", target, "at index", middle);
          return middle;
        } else if (this.array[middle] > target) {
          this.endIndex = middle - 1;
        } else if (this.array[middle] < target) {
          this.startIndex = middle + 1;
        }
      }
      return -1; // Return -1 when the target is not found
    }
  }
  
  let search = new BinarySearch([-11, -2, 3,45, 4, 7, 56,67]);
  let result = search.search(7);
  console.log(result);
  