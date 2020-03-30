export class ChiefExecutiveOfficer {
  static _name: string
  static _age: number

  get name() { return ChiefExecutiveOfficer._name }
  set name(value) { ChiefExecutiveOfficer._name = value }

  get age() { return ChiefExecutiveOfficer._age }
  set age(value) { ChiefExecutiveOfficer._age = value }

  toString() {
    return `CEO's name is ${this.name} ` +
      `and he is ${this.age} years old.`
  }
}
