//:::::::   A R R O W  ::  F U N C T I O N S   ::::::

//https://www.hackerrank.com/challenges/js10-arrows/problem

function modifyArray(nums) {
  return nums.map(n => (n = n % 2 == 0 ? n * 2 : n * 3));
}
