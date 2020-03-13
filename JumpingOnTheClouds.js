//:::::::   J U M P I N G  ::  O N  ::  T H E  ::  C L O U D S   ::::::

//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

const jumpingOnClouds = c => {
  let jumps = 0;

  let i = 0;

  while (i < c.length) {
    if (c[i + 2] === 0) i += 2;
    else i += 1;
    if (i !== c.length) jumps++;
  }

  return jumps;
};
