export class Rectangle {
  constructor(protected width: number, protected height: number) {}

  getWidth() { return this.width }
  getHeight() { return this.height }

  setWidth(value: number) { this.width = value }
  setHeight(value: number) { this.height = value }

  getArea() {
    return this.width * this.height
  }

  toString() {
    return `${this.width} x ${this.height}`
  }
}

export class Square extends Rectangle {
  constructor(size: number) {
    super(size, size)
  }

  setWidth(value: number) {
    this.width = value
    this.height = value
  }

  setHeight(value: number) {
    super.width = value
    super.height = value
  }
}

export function cutOutHalfByHeight(rectangle: Rectangle) {
  rectangle.setHeight(rectangle.getHeight() / 2)
}
