const prism = require('../prism')
const clusters = require('../controllers/clusters')

module.exports = {
  attachRoutes: function (app) {
    app.get('/clusters', catchErrors(async (req, res) => {
      let list = await clusters.getAllSafe()
      res.json(list)
    }))
  }
}

function catchErrors(handler) {
  return async (req, res, next) => {
      try {
          return await handler(req, res, next)
      } catch (e) {
          console.error(e)
          next(e)
      }
  }
}