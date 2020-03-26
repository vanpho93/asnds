import { PersonBuilder } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Tag works`, () => {
    const person = PersonBuilder.create()
      .lives.at('123 London Road').in('London').withPostcode('SW12BC')
      .works.at('Fabrikam').asA('Engineer').earning(123000)
      .build()
    equal(
      person.toString(),
      'Person lives at 123 London Road, London, SW12BC\n' +
      'and works at Fabrikam as a Engineer earning 123000'
    )
  })
})
