import td from 'testdouble'
import { Creature } from './model'
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

  it(`${TEST_TITLE} Creature works`, () => {
    const creature = new Creature()
    creature.agility = 11
    creature.agility = 11
    creature.agility = 12
    equal(
      output,
      'Assigning 11 to agility\n' +
      'Assigning 12 to agility\n'
    )
  })
})
