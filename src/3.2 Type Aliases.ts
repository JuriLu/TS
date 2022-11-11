
//* Type Aliases

type Point = {
     x: number,
     y: number
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}
