function plus(n1: number, n2: number) {
  return n1 + n2;
}

function printResult1(number: number): void {
  console.log("Result: " + number);
  // undefiend if we return "nothing"
  // void ignore
}

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult1(plus(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = plus;

console.log(combineValues(8, 8));
console.log(
  addAndHandler(2, 2, (result) => {
    console.log(result);
  })
);
