//* Intersection Types

type Circle = {
     radius: number;
}
type Colorful = {
     color: string;
}

type ColorfulCircle = Circle & Colorful

const happyFace : ColorfulCircle = {
     radius: 4,
     color: 'Green'
}