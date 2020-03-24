import { map } from 'lodash'

export enum ERelationshipType {
  PARENT = 'PARENT',
  CHILD = 'CHILD',
  SIBLING = 'SIBLING',
}

export class Person {
  constructor(public name: string) {}
}

export class Relationship {
  constructor(
    public from: Person,
    public type: ERelationshipType,
    public to: Person
  ) {}

  toString() {
    return `${this.from.name} is ${this.type} of ${this.to.name}`
  }
}

export class RelationshipDatabase {
  public data: Relationship[] = []

  addParentAndChild(parent: Person, child: Person) {
    this.data.push(new Relationship(parent, ERelationshipType.PARENT, child))
    this.data.push(new Relationship(child, ERelationshipType.CHILD, parent))
  }
}

export class Research {
  constructor(private relationshipDatabase: RelationshipDatabase) {}

  public findAllChildrenOf(name: string) {
    // problem: direct dependence on storage mechanic
    const relationships = this.relationshipDatabase.data.filter(({ from, type }) => {
      return from.name === name && type === ERelationshipType.PARENT
    })
    map(relationships, 'to').forEach(to => console.log(`${name} has a child named ${to.name}`))
  }
}

interface IRelationshipBrowser {
  findAllChildrenOf(name: string): Person[]
}

export class BetterRelationshipDatabase implements IRelationshipBrowser {
  public data: Relationship[] = []

  addParentAndChild(parent: Person, child: Person) {
    this.data.push(new Relationship(parent, ERelationshipType.PARENT, child))
    this.data.push(new Relationship(child, ERelationshipType.CHILD, parent))
  }

  public findAllChildrenOf(name: string) {
    const relationships = this.data.filter(({ from, type }) => {
      return from.name === name && type === ERelationshipType.PARENT
    })
    return map(relationships, 'to')
  }
}

export class BetterResearch {
  constructor(private relationshipBrowser: IRelationshipBrowser) {}

  public findAllChildrenOf(name: string) {
    // problem: direct dependence on storage mechanic
    const children = this.relationshipBrowser.findAllChildrenOf(name)
    children.forEach(to => console.log(`${name} has a child named ${to.name}`))
  }
}
