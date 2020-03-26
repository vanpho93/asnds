import { Tag, HtmlBuilder } from './model'
import { TestHelper } from '../../helpers'
import { deepEqual } from 'assert'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Tag works`, () => {
    const li1 = new Tag('li', 'Foo')
    const li2 = new Tag('li', 'Bar')
    const li3 = new Tag('li', 'Baz')

    const ul = new Tag('ul', '', [li1, li2, li3])
    const div = new Tag('div', '', [ul])

    deepEqual(
      div.toString(),
      [
        '<div>\n',
        '  <ul>\n',
        '    <li>\n',
        '      Foo\n',
        '    </li>\n',
        '    <li>\n',
        '      Bar\n',
        '    </li>\n',
        '    <li>\n',
        '      Baz\n',
        '    </li>\n',
        '  </ul>\n',
        '</div>\n',
      ].join('')
    )
  })

  it(`${TEST_TITLE} HtmlBuilder works`, () => {
    const html = HtmlBuilder.create('ul')
      .addChild('li', 'Foo')
      .addChild('li', 'Bar')
      .addChild('li', 'Baz')
      .toString()
    deepEqual(
      html,
      [
        '<ul>\n',
        '  <li>\n',
        '    Foo\n',
        '  </li>\n',
        '  <li>\n',
        '    Bar\n',
        '  </li>\n',
        '  <li>\n',
        '    Baz\n',
        '  </li>\n',
        '</ul>\n',
      ].join('')
    )
  })
})
