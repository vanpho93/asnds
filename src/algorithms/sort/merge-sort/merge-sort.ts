export function mergeSortRecursive(input: number[]): number[] {
  if (input.length <= 1) return input

  const centerIndex = Math.round(input.length / 2)
  const leftArray = input.slice(0, centerIndex)
  const rightArray = input.slice(centerIndex, input.length)

  return merge(mergeSortRecursive(leftArray), mergeSortRecursive(rightArray))
}

export function mergeSortIterative(input: number[]): number[] {
  const totalLevel = Math.floor(Math.log2(input.length)) + 1
  for (let i = 1; i <= totalLevel; i++) {
    const childArrayLength = Math.pow(2, i - 1) // 1 -> 2 -> 4 -> 8 -> ...
    for (let j = 0; j < input.length; j += childArrayLength * 2) {
      const leftArrayStart = j
      const leftArrayEnd = j + childArrayLength - 1
      const rightArrayStart = leftArrayEnd + 1
      const rightArrayEnd = rightArrayStart + childArrayLength - 1

      const leftArray = input.slice(leftArrayStart, leftArrayEnd + 1)
      const rightArray = input.slice(rightArrayStart, rightArrayEnd + 1)
      const mergedArray = merge(leftArray, rightArray)
      mergedArray.forEach((value, index) => input[index + j] = value)
    }
  }
  return input
}

function merge(leftArray: number[], rightArray: number[]): number[] {
  const result = []

  let leftIndex = 0
  let rightIndex = 0
  const totalLength = leftArray.length + rightArray.length

  while (result.length !== totalLength) {
    const isOnlyLeftRemains = leftArray[leftIndex] !== undefined && rightArray[rightIndex] === undefined
    const isNextComeFromLeftArray = isOnlyLeftRemains || leftArray[leftIndex] < rightArray[rightIndex]

    if (isNextComeFromLeftArray) {
      result.push(leftArray[leftIndex])
      leftIndex++
    } else {
      result.push(rightArray[rightIndex])
      rightIndex++
    }
  }
  return result
}
