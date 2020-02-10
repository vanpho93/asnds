export function getTestTitle(filename: string) {
  const startIndex = filename.indexOf('/dist/') + '/dist/'.length
  const dirnameTrimmed = filename.substring(startIndex, filename.length - '.test.ts'.length)
  return dirnameTrimmed
}
