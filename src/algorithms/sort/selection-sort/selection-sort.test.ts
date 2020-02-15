import { ok } from 'assert'
import { getTestTitle, isValidSortFunction } from '../../../helpers'
import { selectionSort } from './selection-sort'

const TEST_TITLE = getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Can use selection sort`, () => {
    ok(isValidSortFunction(selectionSort))
  })
})
