import { CodeBuilder } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} CodeBuilder works`, () => {
    const cb = CodeBuilder.create('Person')
      .addField('name')
      .addField('age')
    equal(
      cb.toString(),
      [
        'class Person {',
        '  constructor(name, age) {',
        '    this.name = name;',
        '    this.age = age;',
        '  }',
        '}',
      ].join('\n').trim()
    )
  })

  it(`${TEST_TITLE} CodeBuilder with empty fields`, () => {
    const cb = CodeBuilder.create('Person')
    equal(
      cb.toString(),
      [
        'class Person {',
        '}',
      ].join('\n').trim()
    )
  })
})
