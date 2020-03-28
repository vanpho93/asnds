import { findIndex } from 'lodash'

class Address {
  constructor(
    public suite: number,
    public streetAddress: string,
    public city: string
  ) { }

  toString() {
    return `Suite ${this.suite}, ${this.streetAddress}, ${this.city}`
  }
}

class Employee {
  constructor(public name: string, public address: Address) { }

  toString() {
    return `${this.name} works at ${this.address}`
  }

  greet() {
    console.log(
      `Hi, my name is ${this.name}, I work at ${this.address.toString()}`
    )
  }
}
// tslint:disable-next-line:no-any
type AnyClass = { new(...args: any[]): any }

class Serializer {
  constructor(private types: AnyClass[]) { }

  // tslint:disable-next-line:no-any
  markRecursive<T>(object: T & { typeIndex?: number } & { [key: string]: any }) {
    const index = findIndex(this.types, { name: object.constructor.name })
    if (index !== -1) {
      object.typeIndex = index

      for (const key in object) {
        if (object.hasOwnProperty(key) && object[key] !== null) this.markRecursive(object[key])
      }
    }
  }

  // tslint:disable-next-line:no-any
  reconstructRecursive<T>(object: T & { typeIndex?: number } & { [key: string]: any }): T {
    if (object.hasOwnProperty('typeIndex')) {
      const type = this.types[object.typeIndex]
      const obj = new type()
      for (const key in object) {
        if (object.hasOwnProperty(key) && object[key] !== null) {
          obj[key] = this.reconstructRecursive(object[key])
        }
      }
      delete obj.typeIndex
      return obj
    }
    return object
  }

  clone<T>(object: T): T {
    this.markRecursive(object)
    const copy = JSON.parse(JSON.stringify(object))
    return this.reconstructRecursive(copy)
  }
}

export class EmployeeFactory {
  private static serializer = new Serializer([Employee, Address])

  private static main = new Employee(
    null,
    new Address(null, '123 East Dr', 'London')
  )

  private static aux = new Employee(
    null,
    new Address(null, '200 London Road', 'Oxford')
  )

  private static newEmployee(proto: Employee, name: string, suite: number) {
    const copy = EmployeeFactory.serializer.clone(proto)
    copy.name = name
    copy.address.suite = suite
    return copy
  }

  static newMainOfficeEmployee(name: string, suite: number) {
    return this.newEmployee(
      EmployeeFactory.main, name, suite
    )
  }

  static newAuxOfficeEmployee(name: string, suite: number) {
    return this.newEmployee(
      EmployeeFactory.aux, name, suite
    )
  }
}
