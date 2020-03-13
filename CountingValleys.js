//:::::::   C O U N T I N G  ::  V A L L E Y S   ::::::

//https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(n, s) {
  let seaLevel = 0,
    result = 0;

  for (let i = 0; i < s.length; i++) {
    seaLevel = s[i] === "U" ? seaLevel + 1 : seaLevel - 1;
    result = seaLevel === 0 && s[i] === "U" ? result + 1 : result;
  }
  return result;
}
