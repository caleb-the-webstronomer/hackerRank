//:::::::   B I T W I S E  ::  O P E R A T O R S   ::::::

//https://www.hackerrank.com/challenges/js10-bitwise/problem

function getMaxLessThanK(n, k) {
  return (k | (k - 1)) > n ? k - 2 : k - 1;
}
