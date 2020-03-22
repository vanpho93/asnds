import { writeFileSync } from 'fs'

export class Journal {
  public static count = 0

  private entries: { [index: number]: string } = {}

  public addEntry(text: string) {
    const index = Journal.count++
    const entry = `${index}: ${text}`
    this.entries[index] = entry
    return index
  }

  public removeEntry(index: number) {
    delete this.entries[index]
  }

  toString() {
    return Object.values(this.entries).join('\n')
  }

  // Instead of implementing these two methods here,
  // we should implement them into a new separated class called PersistenceManager for example
  // saveToFile(filename: string) {
  //
  // }
  //
  // loadFromFile(filename: string) {
  //
  // }
}

export class PersistenceManager {
  public loadFromFile(filename: string): Journal {
    // implementation goes here
    return null
  }

  public saveToFile(journal: Journal, filename: string) {
    writeFileSync(filename, journal.toString())
  }
}
