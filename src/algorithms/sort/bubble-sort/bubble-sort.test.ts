import { ok } from 'assert'
import { getTestTitle, isValidSortFunction } from '../../../helpers'
import { bubleSort } from './bubble-sort'

const TEST_TITLE = getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Can use bubble sort`, () => {
    ok(isValidSortFunction(bubleSort))
  })
})
