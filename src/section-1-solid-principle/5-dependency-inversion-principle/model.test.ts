import td from 'testdouble'
import { equal } from 'assert'
import {
  Relationship, Person, ERelationshipType, RelationshipDatabase,
  Research, BetterRelationshipDatabase, BetterResearch,
} from './model'
import { TestHelper } from '../../helpers'

const TEST_TITLE = TestHelper.getTestTitle(__filename)

describe(TEST_TITLE, () => {
  const john = new Person('John')
  const christ = new Person('Christ')
  const matt = new Person('Matt')

  beforeEach(TEST_TITLE, () => {
    td.replace(console, 'log', td.function())
  })

  afterEach(TEST_TITLE, () => {
    td.reset()
  })

  it(`${TEST_TITLE} Relationship works`, () => {
    const relationship = new Relationship(john, ERelationshipType.PARENT, christ)
    equal(relationship.toString(), 'John is PARENT of Christ')
  })

  it(`${TEST_TITLE} RelationshipDatabase and Research work`, () => {
    const relationshipDatabase = new RelationshipDatabase()
    relationshipDatabase.addParentAndChild(john, christ)
    relationshipDatabase.addParentAndChild(john, matt)

    const research = new Research(relationshipDatabase)
    research.findAllChildrenOf('John')
    td.verify(console.log('John has a child named Christ'))
    td.verify(console.log('John has a child named Matt'))
  })

  it(`${TEST_TITLE} BetterRelationshipDatabase and BetterResearch work`, () => {
    const relationshipDatabase = new BetterRelationshipDatabase()
    relationshipDatabase.addParentAndChild(john, christ)
    relationshipDatabase.addParentAndChild(john, matt)
    const research = new BetterResearch(relationshipDatabase)
    research.findAllChildrenOf('John')
    td.verify(console.log('John has a child named Christ'))
    td.verify(console.log('John has a child named Matt'))
  })
})
