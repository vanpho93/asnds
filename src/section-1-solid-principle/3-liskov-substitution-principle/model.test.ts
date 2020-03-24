import { equal, notEqual } from 'assert'
import { Rectangle, Square, cutOutHalfByHeight } from './model'
import { TestHelper } from '../../helpers'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Rectangle works`, () => {
    const rectangle = new Rectangle(4, 10)
    equal(rectangle.getArea(), 40)

    rectangle.setWidth(6)
    equal(rectangle.getWidth(), 6)
    equal(rectangle.getArea(), 60)

    rectangle.setHeight(20)
    equal(rectangle.getHeight(), 20)
    equal(rectangle.getArea(), 120)
    equal(rectangle.toString(), `6 x 20`)
  })

  it(`${TEST_TITLE} Square works`, () => {
    const square = new Square(4)
    equal(square.getArea(), 16)

    square.setWidth(6)
    equal(square.getWidth(), 6)
    equal(square.getHeight(), 6)
    equal(square.getArea(), 36)

    square.setHeight(10)
    equal(square.getWidth(), 10)
    equal(square.getHeight(), 10)
    equal(square.getArea(), 100)
    equal(square.toString(), `10 x 10`)
  })

  it(`cutOutHalfByHeight works with Rectangle`, () => {
    const rectangle = new Rectangle(4, 10)
    cutOutHalfByHeight(rectangle)
    equal(rectangle.getArea(), 4 * (10 / 2))
  })

  it(`cutOutHalfByHeight does not work correctly with Square`, () => {
    const square = new Square(10)
    cutOutHalfByHeight(square)
    notEqual(square.getArea(), 10 * (10 / 2))
  })
})
