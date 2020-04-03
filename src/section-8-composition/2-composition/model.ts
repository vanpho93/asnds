abstract class Connectable {
  protected ins: Connectable[] = []
  protected outs: Connectable[] = []

  abstract getChildren(): Connectable[]

  connectTo(other: Connectable) {
    for (const from of this.getChildren())
      for (const to of other.getChildren()) {
        from.outs.push(to)
        to.ins.push(from)
      }
  }
}

export class Neuron extends Connectable {
  getChildren() { return [this] }

  toString() {
    return `A neuron with ${this.ins.length} inputs ` +
      `and ${this.outs.length} outputs`
  }
}

export class NeuronLayer extends Connectable {
  private children: Connectable[] = []

  constructor(count: number) {
    super()
    while (count-- > 0) this.children.push(new Neuron())
  }

  getChildren() { return this.children }

  toString() {
    return `A layer with ${this.children.length} neurons`
  }
}
