import { PointFactory, Point } from './model'
import { TestHelper } from '../../helpers'
import { deepEqual } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} PointFactory works`, () => {
    const point1 = PointFactory.newCartesianPoint(1, 2)
    deepEqual(point1, new Point(1, 2))

    const point2 = Point.factory.newPolarPoint(1, Math.PI)
    deepEqual(point2, new Point(-1, Math.sin(Math.PI)))
  })
})
