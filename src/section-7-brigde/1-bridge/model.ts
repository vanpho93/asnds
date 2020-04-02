interface IRenderer {
  drawCircle(radius: number): void
}

abstract class Shape {
  constructor(protected renderer: IRenderer) {}

  abstract draw(): void
}

export class Circle extends Shape {
  constructor(renderer: IRenderer, public radius: number) {
    super(renderer)
  }

  draw() {
    this.renderer.drawCircle(this.radius)
  }

  resize(factor: number) {
    this.radius *= factor
  }
}

export class VectorRenderer implements IRenderer {
  drawCircle(radius: number) {
    console.log(`Drawing a circle of radius ${radius}`)
  }
}

export class RasterRenderer implements IRenderer {
  drawCircle(radius: number) {
    console.log(`Drawing pixels for circle of radius ${radius}`)
  }
}
