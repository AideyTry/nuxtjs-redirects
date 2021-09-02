import axios from 'axios'

async function redirectModule(moduleOptions) {
  // Set default value
  let defaults = {
    redirects: {
      headers: {
        common: {
          "X-Client-Type": "PC"
        }
      },
      callback: (list = []) => {
        const radioType = { 1: 301, 2: 302 };
        return list && Array.from(list, ({ requestLink, targetLink, type }) => ({ from: requestLink, to: targetLink, code: radioType[type] }))
      }
    },
  }

  const options = {
    ...defaults.redirects,
    ...await parseOptions(this.options.redirects),
    ...await parseOptions(moduleOptions)
  }  

  // Add server middleware
  const middleware = require('./middleware.js')(axios, options)
  this.addServerMiddleware(middleware)

}

async function parseOptions (options = {}) {
  if (typeof options === 'function') {
    options = await options()
  }

  if (Object.keys(options).length === 0) {
    return []
  }

  if (typeof options.callback === 'function') {
    options.callback = await options.callback
  }

  return options
}

module.exports = redirectModule
// REQUIRED if publishing the module as npm package
module.exports.meta = require('../package.json')