export function quickSortRecursive(input: number[]): number[] {
  if (input.length <= 1) return input

  const pivotIndex = Math.floor(Math.random() * input.length)
  const left = input.filter((ele, index) => ele <= input[pivotIndex] && index !== pivotIndex)
  const right = input.filter(ele => ele > input[pivotIndex])

  return [...quickSortRecursive(left), input[pivotIndex], ...quickSortRecursive(right)]
}
