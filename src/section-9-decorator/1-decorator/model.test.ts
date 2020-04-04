import { Component, IComponent } from './model'
import { TestHelper } from '../../helpers'
import { equal } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Component works`, () => {
    @Component('Hello, I am {{name}}. I am {{age}} years old.')
    class Person {
      constructor(public name: string, public age: number) {}
    }

    const person = new Person('Ed', 18)
    equal((person as unknown as IComponent).__render(), 'Hello, I am Ed. I am 18 years old.')
  })
})
