import td from 'testdouble'
import { HotDrinkMachine } from './model'
import { TestHelper } from '../../helpers'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  beforeEach(TEST_TITLE, () => {
    td.replace(console, 'log', td.function())
  })

  afterEach(TEST_TITLE, () => {
    td.reset()
  })

  it(`${TEST_TITLE} HotDrinkMachine works`, () => {
    const hotDrinkMachine = new HotDrinkMachine()
    const coffee = hotDrinkMachine.makeDrink('COFFEE', 100)
    coffee.consume()
    td.verify(console.log('Grind some beans, boil water, pour 100ml'))
    td.verify(console.log('This coffee is delicious!'))

    const tea = hotDrinkMachine.makeDrink('TEA', 100)
    tea.consume()
    td.verify(console.log('Put in tea bag, boil water, pour 100ml'))
    td.verify(console.log('This tea is nice with lemon!'))
  })
})
