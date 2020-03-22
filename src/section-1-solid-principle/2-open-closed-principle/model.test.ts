import { deepEqual } from 'assert'
import { Product, EColor, ESize, ProductFilter, BetterFilter, ColorSpecification, AndSpecification, SizeSpecification, OrSpecification } from './model'
import { TestHelper } from '../../helpers'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {

  const apple = new Product('Apple', EColor.GREEN, ESize.SMALL)
  const tree  = new Product('Tree', EColor.GREEN, ESize.LARGE)
  const house = new Product('House', EColor.BLUE, ESize.LARGE)
  const products = [apple, tree, house]

  it(`${TEST_TITLE} ProductFilter works`, () => {
    const productFilter = new ProductFilter()
    const greenProducts = productFilter.filterByColor(products, EColor.GREEN)
    deepEqual(greenProducts, [apple, tree])

    const largeProducts = productFilter.filterBySize(products, ESize.LARGE)
    deepEqual(largeProducts, [tree, house])

    const largeAndGreenProducts = productFilter.filterBySizeAndColor(products, ESize.LARGE, EColor.GREEN)
    deepEqual(largeAndGreenProducts, [tree])
  })

  it(`${TEST_TITLE} BetterFilter works`, () => {
    const betterFilter = new BetterFilter<Product>()
    const greenProducts = betterFilter.filter(products, new ColorSpecification(EColor.GREEN))
    deepEqual(greenProducts, [apple, tree])

    const largeAndGreenProducts = betterFilter.filter(
      products,
      new AndSpecification(new ColorSpecification(EColor.GREEN), new SizeSpecification(ESize.LARGE))
    )
    deepEqual(largeAndGreenProducts, [tree])

    const smallOrBlueProducts = betterFilter.filter(
      products,
      new OrSpecification(new ColorSpecification(EColor.BLUE), new SizeSpecification(ESize.SMALL))
    )
    deepEqual(smallOrBlueProducts, [apple, house])
  })
})
