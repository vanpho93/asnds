import { ok } from 'assert'
import { getTestTitle, isValidSortFunction } from '../../../helpers'
import { insertionSort } from './insertion-sort'

const TEST_TITLE = getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Can use insertion sort`, () => {
    ok(isValidSortFunction(insertionSort))
  })
})
