export function selectionSort(input: number[]): number[] {
  for (let index = 0; index < input.length; index++) {
    const nextSmallestElementIndex = getSmallestElementIndexFrom(input, index)
    if (index === nextSmallestElementIndex) continue
    swapWithNextElement(input, index, nextSmallestElementIndex)
  }
  return input
}

function getSmallestElementIndexFrom(input: number[], fromIndex: number) {
  let result = fromIndex
  for (let index = fromIndex + 1; index < input.length; index++) {
    if (input[result] <= input[index]) continue
    result = index
  }
  return result
}

function swapWithNextElement(input: number[], index1: number, index2: number) {
  const temp = input[index1]
  input[index1] = input[index2]
  input[index2] = temp
}
