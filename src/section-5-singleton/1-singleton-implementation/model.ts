export class Singleton {
  constructor() {
    // tslint:disable-next-line:no-any
    const instance = (this.constructor as any).instance
    if (instance) {
      return instance
    }

    // tslint:disable-next-line:no-any
    (this.constructor as any).instance = this
  }
}
