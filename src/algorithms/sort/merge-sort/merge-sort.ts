export function mergeSort(input: number[]): number[] {
  if (input.length <= 1) return input

  const centerIndex = Math.round(input.length / 2)
  const leftArray = input.slice(0, centerIndex)
  const rightArray = input.slice(centerIndex, input.length)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
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
