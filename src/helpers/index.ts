import { deepEqual } from 'assert'

export function getTestTitle(filename: string) {
  const startIndex = filename.indexOf('/dist/') + '/dist/'.length
  const dirnameTrimmed = filename.substring(startIndex, filename.length - '.test.ts'.length)
  return dirnameTrimmed
}

export function isValidSortFunction(sortFunction: (x: number[]) => number[]) {
  const cases: { input: number[], output: number[] }[] = [
    {
      input: [2, 4, 1, 5],
      output: [1, 2, 4, 5],
    },
    {
      input: [3, 6, 1, 5, 3, 6],
      output: [1, 3, 3, 5, 6, 6],
    },
    {
      input: [-1000],
      output: [-1000],
    },
    {
      input: [2, 8, 2, 9, 3, 2, 10, 7, 3],
      output: [2, 2, 2, 3, 3, 7, 8, 9, 10],
    },
    {
      input: [-164, 48, 359, 343, -447, 60, -161, -357, -13, -96, -231, 285, 41, 27, 39, -312, -436, 62, -483, -447],
      output: [-483, -447, -447, -436, -357, -312, -231, -164, -161, -96, -13, 27, 39, 41, 48, 60, 62, 285, 343, 359],
    },
    {
      input: [-1, -2, 0],
      output: [-2, -1, 0],
    },
  ]
  try {
    for (let index = 0; index < cases.length; index++) {
      deepEqual(
        sortFunction(cases[index].input),
        cases[index].output
      )
    }
  } catch (error) {
    return false
  }
  return true
}
