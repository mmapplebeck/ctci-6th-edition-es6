export class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

export class Square {
  constructor(pos, size) {
    this.pos = pos
    this.size = size
    this.center = new Point(this.pos.x + this.size / 2, this.pos.y - this.size / 2)
  }
}

export class Line {
  constructor(start, end) {
    this.start = start
    this.end = end
    this.m = (end.y - start.y) / (end.x - start.x)
    this.b = start.y - this.m * start.x
    this.equation = `${this.m}x${this.b ? ' + ' + this.b : ''}`
  }
}

export const bisectSquares = (square1, square2) => new Line(square1.center, square2.center)
