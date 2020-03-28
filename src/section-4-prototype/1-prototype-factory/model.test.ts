import td from 'testdouble'
import { EmployeeFactory } from './model'
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

  it(`${TEST_TITLE} EmployeeFactory works`, () => {
    const john = EmployeeFactory.newMainOfficeEmployee('John', 4321)
    const jane = EmployeeFactory.newAuxOfficeEmployee('Jane', 222)

    equal(john.toString(), 'John works at Suite 4321, 123 East Dr, London')
    equal(jane.toString(), 'Jane works at Suite 222, 200 London Road, Oxford')

    john.greet()
    jane.greet()
    td.verify(console.log('Hi, my name is John, I work at Suite 4321, 123 East Dr, London'))
    td.verify(console.log('Hi, my name is Jane, I work at Suite 222, 200 London Road, Oxford'))
  })
})
