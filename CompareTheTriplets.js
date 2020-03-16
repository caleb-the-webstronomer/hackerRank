//https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let x = 0,
    y = 0,
    i = 0,
    ar = [];
  for (i; i < a.length; i++) {
    if (a[i] > b[i]) x++;
    else if (a[i] < b[i]) y++;
  }
  ar.push(x);
  ar.push(y);
  return ar;
}
