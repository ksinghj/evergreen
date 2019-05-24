const glob = require('glob')

module.exports = function noop() {}
module.exports.pitch = function pitch() {
  const storybookFiles = glob.sync(
    `${process.cwd()}/src/*/stories/**/*.stories.{js,tsx}`
  )

  const storyRequireStatements = storybookFiles
    .map(storyPath => `require(${JSON.stringify(storyPath)});`)
    .join('\n')

  return storyRequireStatements
}