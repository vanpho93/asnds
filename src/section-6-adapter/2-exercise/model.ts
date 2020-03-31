export class Rectangle {
  constructor(public width: number, public height: number) {}
}

export function getArea(rectangle: Rectangle) {
  return rectangle.width * rectangle.height
}

export class Square {
  constructor(public side: number) {}
}

export class SquareToRectangleAdapter extends Rectangle {
  constructor(square: Square) {
    super(square.side, square.side)
  }
}
