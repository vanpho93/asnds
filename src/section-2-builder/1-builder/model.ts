export class Tag {
  static get indentSize() { return 2 }

  constructor(private name = '', private text = '', public children: Tag[] = []) {}

  private toStringImpl(indent: number): string {
    const html = []
    const i = ' '.repeat(indent * Tag.indentSize)
    html.push(`${i}<${this.name}>\n`)
    if (this.text.length > 0) {
      html.push(' '.repeat(Tag.indentSize * (indent + 1)))
      html.push(this.text)
      html.push('\n')
    }

    this.children.forEach(child => html.push(child.toStringImpl(indent + 1)))
    html.push(`${i}</${this.name}>\n`)
    return html.join('')
  }

  toString() {
    return this.toStringImpl(0)
  }
}

export class HtmlBuilder {
  private root: Tag

  static create(rootName: string) {
    return new HtmlBuilder(rootName)
  }

  constructor(rootName: string) {
    this.root = new Tag(rootName)
  }

  addChild(childName = '', childText = '') {
    const child = new Tag(childName, childText)
    this.root.children.push(child)
    return this
  }

  public toString() {
    return this.root.toString()
  }

  public build() {
    return this.root
  }
}
