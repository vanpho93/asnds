import { isNil } from 'lodash'

interface IHotDrink {
  consume(): void
}

class Tea implements IHotDrink {
  consume() {
    console.log('This tea is nice with lemon!')
  }
}

class Coffee implements IHotDrink {
  consume() {
    console.log('This coffee is delicious!')
  }
}

abstract class HotDrinkFactory<T> {
  abstract prepare(amount: number): T
}

class TeaFactory extends HotDrinkFactory<Tea> {
  prepare(amount: number) {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`)
    return new Tea()
  }
}

class CoffeeFactory extends HotDrinkFactory<Coffee> {
  prepare(amount: number) {
    console.log(`Grind some beans, boil water, pour ${amount}ml`)
    return new Coffee()
  }
}

type ClassOfHotDrinkFactory = { new (): HotDrinkFactory<IHotDrink> }

const availableDrinks: { [key: string]: ClassOfHotDrinkFactory } = {
  'TEA': TeaFactory,
  'COFFEE': CoffeeFactory,
}

export class HotDrinkMachine {
  private factories: { [key: string ]: HotDrinkFactory<IHotDrink> }
  constructor() {
    this.factories = {}
    for (const drink in availableDrinks) {
      this.factories[drink] = new availableDrinks[drink]()
    }
  }

  makeDrink(type: string, amount: number) {
    const factory = this.factories[type]
    if (isNil(factory)) throw new Error(`Don't know how to make ${type}`)
    return factory.prepare(amount)
  }
}
