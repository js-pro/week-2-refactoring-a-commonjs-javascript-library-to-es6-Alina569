'use strict'
var polygon = class polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get Perimeter() {
    return this.calculatePerimeter;
  }

  get Area() {
    return this.calculateArea;
  }
}

var square = class square extends polygon {
  calculatePerimeter(){
    return this.height*4;
  }
  calculateArea(){
    return this.height * this.height;
  }
}
