export interface IComponent {
  __render(): string
}

export function Component(template: string) {
// tslint:disable-next-line:no-any
  return (baseClass: { new(...args: any[]): any }) => {
    const extendedClass = class extends baseClass implements IComponent {
      __render() {
        const OPEN_QUOTE = '{{'
        const CLOSE_QUOTE = '}}'
        const QUOTE_LENGTH = 2
        let result = template

        while (result.includes(OPEN_QUOTE)) {
          const indexOfFirstOpenQuote = result.indexOf(OPEN_QUOTE)
          const indexOfFirstCloseQuote = result.indexOf(CLOSE_QUOTE)
          const searchValue = result.substring(indexOfFirstOpenQuote, indexOfFirstCloseQuote + QUOTE_LENGTH)

          const propertyName = searchValue.substring(QUOTE_LENGTH, searchValue.length - QUOTE_LENGTH).trim()
          const replaceValue = this[propertyName]

          result = result.replace(searchValue, replaceValue)
        }

        return result
      }
    }
    return extendedClass as typeof baseClass
  }
}
