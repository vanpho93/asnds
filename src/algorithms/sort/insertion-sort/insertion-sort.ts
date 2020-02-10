export function insertionSort(input: number[]): number[] {
  for (let  index = 1; index < input.length; index++) {
    const insertIndex = findSwapIndex(input, index)
    if (insertIndex === -1) continue
    insert(input, index, insertIndex)
  }
  return input
}

function findSwapIndex(input: number[], index: number) {
  const value = input[index]
  if (input[index - 1] < value) return -1

  while (index >= 0) {
    if (input[--index] > value) continue
    return index + 1
  }
}

function insert(input: number[], eleIndex: number, insertIndex: number) {
  const [value] = input.splice(eleIndex, 1)
  input.splice(insertIndex, 0, value)
}
