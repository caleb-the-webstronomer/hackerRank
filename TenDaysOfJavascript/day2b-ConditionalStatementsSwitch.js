//:::::::   C O N D I T I O N A L  ::  S T A T E M E N T S ~  ::  S W I T C H   ::::::

//https://www.hackerrank.com/challenges/js10-switch/problem

function getLetter(s) {
  switch (true) {
    case "aeiou".includes(s[0]):
      return "A";
    case "bcdfg".includes(s[0]):
      return "B";
    case "hjklm".includes(s[0]):
      return "C";
    default:
      return "D";
  }
}
