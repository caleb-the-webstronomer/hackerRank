//:::::::   I N H E R I T A N C E   ::::::

//https://www.hackerrank.com/challenges/js10-inheritance/problem

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function() {
  return this.w * this.h;
};
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}
