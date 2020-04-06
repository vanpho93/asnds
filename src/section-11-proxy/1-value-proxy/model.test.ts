import { Percentage } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Percentage works`, () => {
    const fivePercent = new Percentage(5)
    equal(fivePercent.toString(), '5%')
    // tslint:disable-next-line:no-any
    equal(50 * (fivePercent as any as number), 50 * 0.05)
  })
})
