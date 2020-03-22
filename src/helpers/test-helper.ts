export class TestHelper {
  public static getTestTitle(filename: string) {
    const startIndex = filename.lastIndexOf(`dist`) + 'dist'.length
    return filename.substring(startIndex, filename.length - '.test.ts'.length)
  }
}
