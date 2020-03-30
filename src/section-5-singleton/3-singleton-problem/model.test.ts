import { MyDatabase, SingletonRecordFinder, ConfigurableRecordFinder, DummyDatabase } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} MyDatabase works`, () => {
    const database = new MyDatabase()
    equal(database.getPopulation('Delhi'), 30000000)
    equal(database.getPopulation('NotExists'), 0)
  })

  it(`${TEST_TITLE} SingletonRecordFinder works`, () => {
    const finder = new SingletonRecordFinder()
    const cities = ['Delhi', 'Shanghai', 'Sao Paulo', 'NotExists']
    equal(finder.geTtotalPopulation(cities), 30000000 + 27000000 + 23000000 + 0)
  })

  it(`${TEST_TITLE} ConfigurableRecordFinder works with MyDatabase`, () => {
    const finder = new ConfigurableRecordFinder(new MyDatabase())
    const cities = ['Delhi', 'Shanghai', 'Sao Paulo', 'NotExists']
    equal(finder.getTotalPopulation(cities), 30000000 + 27000000 + 23000000 + 0)
  })

  it(`${TEST_TITLE} ConfigurableRecordFinder works with DummyDatabase`, () => {
    const finder = new ConfigurableRecordFinder(new DummyDatabase())
    const cities = ['alpha', 'beta', 'gamma', 'NotExists']
    equal(finder.getTotalPopulation(cities), 1 + 2 + 3 + 0)
  })
})
