//:::::::   C R E A T E  ::  A  ::  R E C T A N G L E  ::  O B J E C T   ::::::

//https://www.hackerrank.com/challenges/js10-objects/problem

function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}
