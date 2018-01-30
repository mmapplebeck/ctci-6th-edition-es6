export class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.m = (end.y - start.y) / (end.x - start.x)
    this.b = start.y - this.m * start.x
  }
}

export const getIntersection = (start1, end1, start2, end2) => {
  if (end1.x < start1.x) {
    let temp = start1
    start1 = end1
    end1 = temp
  }
  if (end2.x < start2.x) {
    let temp = start2
    start2 = end2
    end2 = temp
  }
  const line1 = new Line(start1, end1)
  const line2 = new Line(start2, end2)

  if (line1.m === line2.m) return null

  let x = (line2.b - line1.b) / (line1.m - line2.m)
  let y = line1.m * x + line1.b

  return new Point(x, y);
}
