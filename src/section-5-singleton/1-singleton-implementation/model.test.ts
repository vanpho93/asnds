import { Singleton } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Singleton works`, () => {
    const s1 = new Singleton()
    const s2 = new Singleton()
    equal(s1, s2)
  })
})
