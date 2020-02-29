//:::::::   C L A S S E S   ::::::

//https://www.hackerrank.com/challenges/js10-class/problem

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    return this.sides.reduce((total, side) => total + side);
  }
}
