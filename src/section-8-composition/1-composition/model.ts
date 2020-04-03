export class GraphicObject {
  static count = 0
  children: GraphicObject[] = []

  constructor(
    public readonly name = `Group ${GraphicObject.count++}`,
    public readonly color: string = undefined
  ) {}

  print(buffer: string[], depth: number) {
    buffer.push('*'.repeat(depth))
    if (depth > 0) buffer.push(' ')
    if (this.color) buffer.push(this.color + ' ')
    buffer.push(this.name)
    buffer.push('\n')

    for (const child of this.children) {
      child.print(buffer, depth + 1)
    }
  }

  push(entity: GraphicObject) {
    this.children.push(entity)
  }

  toString() {
    const buffer: string[] = []
    this.print(buffer, 0)
    return buffer.join('')
  }
}

export class Circle extends GraphicObject {
  constructor(color: string) {
    super('Circle', color)
  }
}

export class Square extends GraphicObject {
  constructor(color: string) {
    super('Square', color)
  }
}
