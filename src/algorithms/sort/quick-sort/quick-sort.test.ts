import { ok } from 'assert'
import { getTestTitle, isValidSortFunction } from '../../../helpers'
import { quickSortRecursive, quickSortIterative } from './quick-sort'

const TEST_TITLE = getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Can use quick sort recursive`, () => {
    ok(isValidSortFunction(quickSortRecursive))
  })

  it(`${TEST_TITLE} Can use quick sort iterative`, () => {
    ok(isValidSortFunction(quickSortIterative))
  })
})
