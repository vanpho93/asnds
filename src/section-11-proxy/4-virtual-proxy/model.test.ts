import td from 'testdouble'
import { drawImage, Image, LazyImage } from './model'
import { TestHelper } from '../../helpers'
import { equal, ok } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  let output = ''

  beforeEach(TEST_TITLE, () => {
    td.replace(console, 'log', (value: string) => output = `${output}${value}\n`)
  })

  afterEach(TEST_TITLE, () => {
    output = ''
    td.reset()
  })

  it(`${TEST_TITLE} Image works`, () => {
    const image = new Image('http://pokemon.com/pikachu.png')
    ok(image)
    equal(
      output,
      'Loading image from http://pokemon.com/pikachu.png\n'
    )
  })

  it(`${TEST_TITLE} LazyImage works`, () => {
    const lazyImage = new LazyImage('http://pokemon.com/pikachu.png')
    ok(lazyImage)
    equal(output, '')
  })

  it(`${TEST_TITLE} drawImage works with Image`, () => {
    const image = new Image('http://pokemon.com/pikachu.png')
    drawImage(image)
    equal(
      output,
      'Loading image from http://pokemon.com/pikachu.png\n' +
      'About to draw the image\n' +
      'Drawing image http://pokemon.com/pikachu.png\n' +
      'Done drawing the image\n'
    )
  })

  it(`${TEST_TITLE} drawImage works with LazyImage`, () => {
    const lazyImage = new LazyImage('http://pokemon.com/pikachu.png')
    drawImage(lazyImage)
    equal(
      output,
      'About to draw the image\n' +
      'Loading image from http://pokemon.com/pikachu.png\n' +
      'Drawing image http://pokemon.com/pikachu.png\n' +
      'Done drawing the image\n'
    )
  })
})
