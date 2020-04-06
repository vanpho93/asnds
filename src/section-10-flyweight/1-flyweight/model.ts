export class FormattedText {
  private caps: boolean[]

  constructor(private plainText: string) {
    this.caps = new Array(this.plainText.length).map(() => false)
  }

  capitalize(start: number, end: number) {
    for (let i = start; i <= end; ++i) this.caps[i] = true
    return this
  }

  toString() {
    let result = ''
    for (let index = 0; index < this.plainText.length; index++) {
      const character = this.plainText[index]
      result += this.caps[index] ? character.toUpperCase() : character
    }
    return result
  }
}

interface IFormat {
  capitalize: boolean
  // other formatting options here
}

export class TextRange {
  constructor(
    private start: number,
    private end: number,
    public format: IFormat
  ) {}

  covers(position: number) {
    return position >= this.start && position <= this.end
  }
}

export class BetterFormattedText {
  formatting: TextRange[] = []

  constructor(private plainText: string) {
  }

  addFormat(start: number, end: number, format: IFormat) {
    const range = new TextRange(start, end, format)
    this.formatting.push(range)
    return this
  }

  toString() {
    const buffer = []
    for (let index = 0; index < this.plainText.length; index++) {
      let character = this.plainText[index]
      for (const range of this.formatting) {
        if (range.covers(index) && range.format.capitalize) {
          character = character.toUpperCase()
        }
      }
      buffer.push(character)
    }
    return buffer.join('')
  }
}
