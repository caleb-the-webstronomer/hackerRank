//https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  const n = arr.length;
  console.log(arr.filter((v, i) => v > 0).length / n);
  console.log(arr.filter((v, i) => v < 0).length / n);
  console.log(arr.filter((v, i) => v == 0).length / n);
}
