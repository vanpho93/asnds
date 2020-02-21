import { ok } from 'assert'
import { getTestTitle, isValidSortFunction } from '../../../helpers'
import { mergeSortRecursive, mergeSortIterative } from './merge-sort'

const TEST_TITLE = getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Can use merge sort recursive`, () => {
    ok(isValidSortFunction(mergeSortRecursive))
  })

  it(`${TEST_TITLE} Can use merge sort iterative`, () => {
    ok(isValidSortFunction(mergeSortIterative))
  })
})
