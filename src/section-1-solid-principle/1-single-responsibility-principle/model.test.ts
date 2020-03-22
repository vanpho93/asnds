import { equal } from 'assert'
import { readFileSync, unlinkSync } from 'fs'
import { Journal, PersistenceManager } from './model'
import { TestHelper } from '../../helpers'

const TEST_TITLE = TestHelper.getTestTitle(__filename)
const FILENAME = 'data.txt'

describe(TEST_TITLE, () => {
  beforeEach(() =>  Journal.count = 0)

  it(`${TEST_TITLE} Journal works`, () => {
    const journal = new Journal()
    journal.addEntry('I cried today.')
    journal.addEntry('I ate a bug.')
    equal(journal.toString(), '0: I cried today.\n1: I ate a bug.')
  })

  it(`${TEST_TITLE} PersistenceManager works`, () => {
    const journal = new Journal()
    journal.addEntry('I cried today.')
    journal.addEntry('I ate a bug.')

    new PersistenceManager().saveToFile(journal, FILENAME)
    const savedJournal = readFileSync(FILENAME, 'utf8')
    equal(savedJournal, '0: I cried today.\n1: I ate a bug.')
    unlinkSync(FILENAME)
  })
})
