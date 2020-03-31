class Point {
  constructor(public x: number, public y: number) {}

  toString() {
    return `(${this.x}, ${this.y})`
  }
}

class Line {
  constructor(public start: Point, public end: Point) {}

  toString() {
    return `${this.start} ${this.end}`
  }
}

export class VectorRectangle extends Array<Line> {
  constructor(x: number, y: number, width: number, height: number) {
    super()
    const pointA = new Point(x, y)
    const pointB = new Point(x + width, y)
    const pointC = new Point(x + width, y + height)
    const pointD = new Point(x, y + height)

    this.push(
      new Line(pointA, pointB),
      new Line(pointB, pointC),
      new Line(pointA, pointD),
      new Line(pointD, pointC)
    )
  }
}

class LineToPointsAdapter {
  static count = 0
  static cache: { [key: string]: Point[] } = {}

  private hash: string

  constructor(line: Line) {
    this.hash = toHashCode(JSON.stringify(line))
    if (LineToPointsAdapter.cache[this.hash]) return
    console.log(`${LineToPointsAdapter.count++}: Generating ` +
    `points for line ${line.toString()} (no caching)`)

    const left = Math.min(line.start.x, line.end.x)
    const right = Math.max(line.start.x, line.end.x)
    const top = Math.min(line.start.y, line.end.y)
    const bottom = Math.max(line.start.y, line.end.y)

    const isVertical = right - left === 0
    const points: Point[] = []
    if (isVertical) {
      for (let y = top; y <= bottom; ++y) {
        points.push(new Point(left, y))
      }
    } else {
      for (let x = left; x <= right; ++x) {
        points.push(new Point(x, top))
      }
    }
    LineToPointsAdapter.cache[this.hash] = points
  }

  get items() {
    return LineToPointsAdapter.cache[this.hash]
  }
}

function drawPoint(point: Point) {
  process.stdout.write('.')
}

export function drawPoints(vectorRectangle: VectorRectangle) {
  for (const line of vectorRectangle) {
    const adapter = new LineToPointsAdapter(line)
    adapter.items.forEach(drawPoint)
  }
}

function toHashCode(source: string) {
  let hash = 0
  if (source.length === 0) return String(hash)
  for (let i = 0; i < source.length; i++) {
    const character = source.charCodeAt(i)
    hash = ((hash << 5) - hash) + character
    hash = hash & hash // Convert to 32-bit integer
  }
  return String(hash)
}
