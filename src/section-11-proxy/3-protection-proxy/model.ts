export class Car {
  drive() {
    console.log('Car being driven')
  }
}

export class Driver {
  constructor(public age: number) {}
}

export class CarProxy extends Car {
  constructor(private driver: Driver) {
    super()
    this.driver = driver
  }

  drive() {
    if (this.driver.age >= 16) super.drive()
    else console.log('Driver too young')
  }
}
