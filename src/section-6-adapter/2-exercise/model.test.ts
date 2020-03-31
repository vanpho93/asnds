import { Rectangle, Square, getArea, SquareToRectangleAdapter } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} getArea works with Rectangle`, () => {
    const area = getArea(new Rectangle(2, 3))
    equal(area, 2 * 3)
  })

  it(`${TEST_TITLE} getArea works with Square`, () => {
    const square = new Square(2)
    const area = getArea(new SquareToRectangleAdapter(square))
    equal(area, 2 * 2)
  })
})
