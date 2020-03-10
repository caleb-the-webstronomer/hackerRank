//:::::::   S O C K  ::  M E R C H A N T   ::::::

// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  let d = {},
    c = 0;

  ar.forEach(e => {
    c += (d[e] = Math.pow((d[e] || 0) - 1, 2)) ? 0 : 1;
  });

  return c;
}

function sockMerchant(n, ar) {
  var res = 0;
  ar.sort();
  for (let i = 0; i < n; i++) {
    if (ar[i] == ar[i + 1]) {
      i++;
      res++;
    }
  }
  return res;
}
