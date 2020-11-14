var parsePath = require('./lib/parsePath')
var serializeCommand = require('./lib/serializeCommand')
var Path = require('./lib/Path')

module.exports = function (pathData) {
  return new Path(parsePath(pathData))
}

module.exports.parse = parsePath
module.exports.Path = Path
module.exports.serializeCommand = serializeCommand
