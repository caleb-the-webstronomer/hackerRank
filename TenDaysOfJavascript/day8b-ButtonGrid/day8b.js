//:::::::   B U T T O N S  ::  C O N T A I N E R   ::::::

//https://www.hackerrank.com/challenges/js10-buttons-container/problem

let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById("btn5");

btn5.onclick = function() {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
};
