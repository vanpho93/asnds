export function bubleSort(input: number[]): number[] {
  let swapped = true
  let sortedElementCount = 0

  while (swapped) {
    swapped = false
    for (let index = 0; index < input.length - 1 - sortedElementCount; index++) {
      if (input[index] <= input[index + 1]) continue
      swapWithNextElement(input, index)
      swapped = true
    }
    sortedElementCount++
  }
  return input
}

function swapWithNextElement(input: number[], index: number) {
  const temp = input[index]
  input[index] = input[index + 1]
  input[index + 1] = temp
}
