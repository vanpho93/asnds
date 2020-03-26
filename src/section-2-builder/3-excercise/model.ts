export class CodeBuilder {
  private fields: string[] = []

  static create(className: string) {
    return new CodeBuilder(className)
  }

  constructor(private className: string) {}

  addField(name: string) {
    this.fields.push(name)
    return this
  }

  private getConstructor() {
    if (this.fields.length === 0) return ''

    const parameterLine = this.fields.join(', ')
    const opening = `  constructor(${parameterLine}) {\n`
    const constructLines = this.fields.map(field => {
      return `    this.${field} = ${field};\n`
    }).join('')
    const closing = '  }\n'
    return `${opening}${constructLines}${closing}`
  }

  toString() {
    const opening = `class ${this.className} {\n`
    const closing = `}`
    return `${opening}${this.getConstructor()}${closing}`
  }
}
