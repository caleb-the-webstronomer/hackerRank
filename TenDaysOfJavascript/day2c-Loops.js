//:::::::   L O O P S   ::::::

//https://www.hackerrank.com/challenges/js10-loops/problem

function vowelsAndConsonants(s) {
  [...s].forEach(c => ("aeiou".includes(c) ? console.log(c) : null));
  [...s].forEach(c => ("aeiou".includes(c) ? null : console.log(c)));
}
