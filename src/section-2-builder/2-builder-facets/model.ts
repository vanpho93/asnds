export class Person {
  // lives
  public streetAddress = ''
  public postcode = ''
  public city = ''

  // works
  public companyName = ''
  public position = ''
  public annualIncome = 0

  toString() {
    return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n`
      + `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
  }
}

export class PersonBuilder {
  static create() {
    return new PersonBuilder()
  }

  constructor(protected person = new Person()) {
    this.person = person
  }

  get lives() {
    return new PersonAddressBuilder(this.person)
  }

  get works() {
    return new PersonJobBuilder(this.person)
  }

  build() {
    return this.person
  }
}

class PersonJobBuilder extends PersonBuilder {

  constructor(protected person: Person) {
    super(person)
  }

  at(companyName: string) {
    this.person.companyName = companyName
    return this
  }

  asA(position: string) {
    this.person.position = position
    return this
  }

  earning(annualIncome: number) {
    this.person.annualIncome = annualIncome
    return this
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(protected person: Person) {
    super(person)
  }

  at(streetAddress: string) {
    this.person.streetAddress = streetAddress
    return this
  }

  withPostcode(postcode: string) {
    this.person.postcode = postcode
    return this
  }

  in(city: string) {
    this.person.city = city
    return this
  }
}
