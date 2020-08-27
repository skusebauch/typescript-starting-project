function plus(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(number: number): void {
  console.log("Result: " + number);
  // undefiend if we return "nothing"
}

printResult(plus(5, 12));
