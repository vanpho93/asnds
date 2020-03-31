import td from 'testdouble'
import { VectorRectangle, drawPoints } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  let output = ''

  beforeEach(TEST_TITLE, () => {
    td.replace(console, 'log', (value: string) => output = `${output}${value}\n`)
    td.replace(process.stdout, 'write', (value: string) => output = `${output}${value}`)
  })

  afterEach(TEST_TITLE, () => {
    output = ''
    td.reset()
  })

  it(`${TEST_TITLE} VectorRectangle works`, () => {
    const vectorRectangle = new VectorRectangle(0, 0, 5, 5)
    drawPoints(vectorRectangle)
    drawPoints(vectorRectangle)

    equal(
      output,
      '0: Generating points for line (0, 0) (5, 0) (no caching)\n' +
      '......1: Generating points for line (5, 0) (5, 5) (no caching)\n' +
      '......2: Generating points for line (0, 0) (0, 5) (no caching)\n' +
      '......3: Generating points for line (0, 5) (5, 5) (no caching)\n' +
      '..............................'
    )
  })
})
