export class Queue<T> {
  private data: T[] = []

  isEmpty() { return this.data.length === 0 }

  push(item: T) { this.data.push(item) }

  pop() { return this.data.pop() }
}
