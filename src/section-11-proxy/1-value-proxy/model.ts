export class Percentage {
  constructor(private percent: number) {}

  valueOf() { return this.percent / 100 }

  toString() { return `${this.percent}%` }
}
