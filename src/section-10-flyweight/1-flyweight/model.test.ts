import { FormattedText, BetterFormattedText } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} FormattedText works`, () => {
    const text = 'This is a brave new world'
    const formattedText = new FormattedText(text)
    equal(
      formattedText.capitalize(10, 15).toString(),
      'This is a BRAVE new world'
    )
  })

  it(`${TEST_TITLE} BetterFormattedText works`, () => {
    const text = 'This is a brave new world'
    const betterFormattedText = new BetterFormattedText(text)
    equal(
      betterFormattedText
      .addFormat(10, 15, { capitalize: true })
      .addFormat(20, 24, { capitalize: true })
      .toString(),
      'This is a BRAVE new WORLD'
    )
  })
})
