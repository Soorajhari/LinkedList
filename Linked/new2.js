function asss(ab, add) {
  let newA = [...ab];
  console.log(newA);
  let max = Math.max(...newA);
  let cop = newA.map((value) => value + add);
  console.log(cop);
  for (i = 0; i < cop.length; i++) {
    if (cop[i] < max) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

console.log(asss([1, 2, 3, 4, 5], 3));
