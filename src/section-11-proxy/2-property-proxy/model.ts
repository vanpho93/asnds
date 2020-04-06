class Property {
  constructor(private _value: number, private name = '') {}

  get value() { return this._value }

  set value(newValue) {
    if (this._value === newValue) return
    console.log(`Assigning ${newValue} to ${this.name}`)
    this._value = newValue
  }
}

export class Creature {
  private _agility: Property

  constructor() {
    this._agility = new Property(10, 'agility')
  }

  get agility() { return this._agility.value }

  set agility(value) {
    this._agility.value = value
  }
}
