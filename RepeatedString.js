//:::::::   R E P E A T E D  ::  S T R I N G   ::::::

//https://www.hackerrank.com/challenges/repeated-string/problem

const repeatedString = (s, n) => {
  const countA = s => s.split("a").length - 1;
  let len = s.length;
  let reps = Math.floor(n / len);
  let remainder = s.slice(0, n % len);

  return reps * countA(s) + countA(remainder);
};
