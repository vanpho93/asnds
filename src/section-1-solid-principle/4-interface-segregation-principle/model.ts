/* tslint:disable */
/* istanbul ignore next */

interface Document {}

interface IMachine {
  print: (document: Document) => void
  scan: (document: Document) => void
  fax: (document: Document) => void
}

class MultiFunctionPrinter implements IMachine {
  print(_document: Document) {}
  scan(_document: Document) {}
  fax(_document: Document) {}
}

class OldFashionedPrinter implements IMachine {
  print(_document: Document) {
    // it is OK
  }

  scan(_document: Document) {
    // not OK
    throw new Error('Not implemented')
  }

  fax(_document: Document) {
    // not OK
    throw new Error('Not implemented')
  }
}

// instead of having a big interface with multiple abstract method
// we can have multiple interface, each with one abstract method

interface IPrinter {
  print: (document: Document) => void
}

interface IScanner {
  scan: (document: Document) => void
}

interface IFaxMachine {
  fax: (document: Document) => void
}

class AnotherOldFashionedPrinter implements IPrinter {
  print(_document: Document) {}
}
