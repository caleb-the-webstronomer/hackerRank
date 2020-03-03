//:::::::   C O N D I T I O N A L  ::  S T A T E M E N T S ~  ::  I F - E L S E   ::::::

//https://www.hackerrank.com/challenges/js10-if-else/problem

function getGrade(score) {
  return "FFEDCBA"[Math.ceil(score / 5.0)];
}
