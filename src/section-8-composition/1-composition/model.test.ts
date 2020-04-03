import { Circle, Square, GraphicObject } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} GraphicObject works`, () => {
    const drawing = new GraphicObject()
    drawing.push(new Square('Red'))
    drawing.push(new Circle('Yellow'))

    const group = new GraphicObject()
    group.push(new Circle('Blue'))
    group.push(new Square('Blue'))
    drawing.push(group)

    equal(
      drawing.toString(),
      'Group 0\n' +
      '* Red Square\n' +
      '* Yellow Circle\n' +
      '* Group 1\n' +
      '** Blue Circle\n' +
      '** Blue Square\n'
    )
  })
})
