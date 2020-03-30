import { ChiefExecutiveOfficer } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Singleton works`, () => {
    const ceo1 = new ChiefExecutiveOfficer()
    ceo1.name = 'Adam Smith'
    ceo1.age = 55

    const ceo2 = new ChiefExecutiveOfficer()
    ceo2.name = 'John Gold'
    ceo2.age = 66

    const ceoDescription = `CEO's name is John Gold ` +
    `and he is 66 years old.`

    equal(ceo1.toString(), ceoDescription)
    equal(ceo2.toString(), ceoDescription)
  })
})
