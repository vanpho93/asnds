import { defaultTo } from 'lodash'
import { readFileSync } from 'fs'
import { join } from 'path'

type CapitalPopulationDictionary =  { [key: string]: number }

interface IPopulationDatabase {
  getPopulation(city: string): number
}

export class MyDatabase implements IPopulationDatabase {
  private static capitals = MyDatabase.load()

  static load(): CapitalPopulationDictionary {
    const file = join(__dirname, 'data.txt').replace('dist', 'src')
    const lines = readFileSync(file).toString().split('\n')

    const result: CapitalPopulationDictionary = {}
    for (let i = 0; i < lines.length / 2; ++i) {
      const cityName = lines[2 * i].trim()
      const population = parseInt(lines[2 * i + 1])
      result[cityName] = population
    }

    return result
  }

  getPopulation(city: string): number {
    return defaultTo(MyDatabase.capitals[city], 0)
  }
}

export class SingletonRecordFinder {
  geTtotalPopulation(cities: string[]) {
    const database = new MyDatabase()
    return cities.map(database.getPopulation).reduce((x, y) => x + y)
  }
}

export class ConfigurableRecordFinder {
  constructor(private database: IPopulationDatabase) {}

  getTotalPopulation(cities: string[]) {
    return cities.map(
      city => this.database.getPopulation(city)
    ).reduce((x, y) => x + y)
  }
}

export class DummyDatabase implements IPopulationDatabase {
  getPopulation(city: string) {
    const capitals: CapitalPopulationDictionary = {
      'alpha': 1,
      'beta': 2,
      'gamma': 3,
    }
    return defaultTo(capitals[city], 0)
  }
}
