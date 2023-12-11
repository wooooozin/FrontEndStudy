class Circle {
  constructor(r) {
    this.r = r;
  }

  circumference() {
    return Math.floor(this.r * 2 * Math.PI);
  }

  area() {
    return Math.floor(Math.pow(this.r, 2) * Math.PI);
  }
}