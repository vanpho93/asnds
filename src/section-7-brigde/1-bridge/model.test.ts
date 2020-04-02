import td from 'testdouble'
import { Circle, VectorRenderer, RasterRenderer } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  beforeEach(TEST_TITLE, () => {
    td.replace(console, 'log', td.function())
  })

  afterEach(TEST_TITLE, () => {
    td.reset()
  })

  it(`${TEST_TITLE} Circle resize works`, () => {
    const RADIUS = 10
    const circle = new Circle(new VectorRenderer(), RADIUS)
    const FACTOR = 1.5
    circle.resize(FACTOR)
    equal(circle.radius, RADIUS * FACTOR)
  })

  it(`${TEST_TITLE} VectorRenderer works`, () => {
    const RADIUS = 10
    const circle = new Circle(new VectorRenderer(), RADIUS)
    circle.draw()
    td.verify(console.log(`Drawing a circle of radius ${RADIUS}`))
  })

  it(`${TEST_TITLE} RasterRenderer works`, () => {
    const RADIUS = 10
    const circle = new Circle(new RasterRenderer(), RADIUS)
    circle.draw()
    td.verify(console.log(`Drawing pixels for circle of radius ${RADIUS}`))
  })
})
