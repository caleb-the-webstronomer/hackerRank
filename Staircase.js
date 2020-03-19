//https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  for (let x = 1; x <= n; x++) {
    console.log(" ".repeat(n - x) + "#".repeat(x));
  }
}
