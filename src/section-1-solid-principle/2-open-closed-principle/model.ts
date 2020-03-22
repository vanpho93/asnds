import { filter } from 'lodash'

export enum EColor {
  RED = 'RED',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
}

export enum ESize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  YUME = 'YUME',
}

export class Product {
  constructor(
    public name: string,
    public color: EColor,
    public size: ESize
  ) {}
}

// We dont do this for filter
export class ProductFilter {
  public filterByColor(products: Product[], color: EColor) {
    return filter(products, { color })
  }

  public filterBySize(products: Product[], size: ESize) {
    return filter(products, { size })
  }

  public filterBySizeAndColor(products: Product[], size: ESize, color: EColor) {
    return filter(products, { color, size })
  }
}

// Better method

export interface ISpecification<T> {
  isSatisfied: (item: T) => boolean
}

export class ColorSpecification implements ISpecification<Product> {
  constructor(private color: EColor) {}

  public isSatisfied(item: Product) {
    return item.color === this.color
  }
}

export class SizeSpecification implements ISpecification<Product> {
  constructor(private size: ESize) {}

  public isSatisfied(item: Product) {
    return item.size === this.size
  }
}

export class AndSpecification<T> implements ISpecification<T> {
  private specs: ISpecification<T>[]

  constructor (...specs: ISpecification<T>[]) {
    this.specs = specs
  }

  public isSatisfied(item: T) {
    return this.specs.every(spec => spec.isSatisfied(item))
  }
}

export class OrSpecification<T> implements ISpecification<T> {
  private specs: ISpecification<T>[]

  constructor (...specs: ISpecification<T>[]) {
    this.specs = specs
  }

  public isSatisfied(item: T) {
    return this.specs.some(spec => spec.isSatisfied(item))
  }
}

export class BetterFilter<T> {
  filter(items: T[], spec: ISpecification<T>) {
    return filter(items, spec.isSatisfied.bind(spec))
  }
}
