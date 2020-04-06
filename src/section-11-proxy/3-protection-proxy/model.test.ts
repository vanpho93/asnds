import td from 'testdouble'
import { CarProxy, Driver } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  let output = ''

  beforeEach(TEST_TITLE, () => {
    td.replace(console, 'log', (value: string) => output = `${output}${value}\n`)
  })

  afterEach(TEST_TITLE, () => {
    output = ''
    td.reset()
  })

  it(`${TEST_TITLE} CarProxy works`, () => {
    new CarProxy(new Driver(12)).drive()
    new CarProxy(new Driver(21)).drive()
    equal(
      output,
      'Driver too young\n' +
      'Car being driven\n'
    )
  })
})
