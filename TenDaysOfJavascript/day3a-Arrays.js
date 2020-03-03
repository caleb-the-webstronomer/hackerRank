//:::::::   A R R A Y S   ::::::

//https://www.hackerrank.com/challenges/js10-arrays/problem

function getSecondLargest(nums) {
  return [...new Set(nums)].sort((a, b) => b - a)[1];
}
