
let coordinate2: { x: number; y: number } = { x: 34, y: 44 };

function randomCoordinate2(): { x: number; y: number } {
  return { x: 2, y: 3 };
}


//* Type Aliases

type Point = {
     x: number,
     y: number
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}
