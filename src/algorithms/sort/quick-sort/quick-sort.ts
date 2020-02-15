import { Stack } from '../../../data-structures/stack'

export function quickSortRecursive(input: number[]): number[] {
  if (input.length <= 1) return input

  const pivotIndex = Math.floor(Math.random() * input.length)
  const left = input.filter((ele, index) => ele <= input[pivotIndex] && index !== pivotIndex)
  const right = input.filter(ele => ele > input[pivotIndex])

  return [...quickSortRecursive(left), input[pivotIndex], ...quickSortRecursive(right)]
}

interface IRange {
  startIndex: number
  endIndex: number
}

function insert(input: number[], eleIndex: number, insertIndex: number) {
  const [value] = input.splice(eleIndex, 1)
  input.splice(insertIndex, 0, value)
}

function partition(input: number[], startIndex: number, endIndex: number) {
  const centerIndex = Math.floor((startIndex + endIndex) / 2)
  insert(input, centerIndex, startIndex)
  let pivotIndex = startIndex

  for (let index = startIndex + 1; index <= endIndex; index++) {
    if (input[index] >= input[pivotIndex]) continue
    insert(input, index, pivotIndex)
    pivotIndex++
  }

  return pivotIndex
}

export function quickSortInterative(input: number[]): number[] {
  const stack = new Stack<IRange>()
  stack.push({ startIndex: 0, endIndex: input.length - 1 })

  while (!stack.isEmpty()) {
    const { startIndex, endIndex } = stack.pop()

    if (endIndex - startIndex < 1) continue

    const pivotIndex = partition(input, startIndex, endIndex)
    stack.push({ startIndex: startIndex, endIndex: Math.max(pivotIndex - 1, startIndex) })
    stack.push({ startIndex: Math.min(pivotIndex + 1, endIndex), endIndex: endIndex })
  }
  return input
}
