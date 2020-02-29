//:::::::   T E M P L A T E  ::  L I T E R A L S   ::::::

//https://www.hackerrank.com/challenges/js10-template-literals/problem

function sides(literals, a, p) {
  const sqroot = (p ** 2 - 16 * a) ** 0.5;
  return [-1, 1].map(s => (p + s * sqroot) / 4);
}
