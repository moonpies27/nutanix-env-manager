const prism = require('../prism')
const clusters = require('../controllers/clusters')

module.exports = {
  attachRoutes: function (app) {
    app.get('/clusters', async (req, res) => {
      let list = await clusters.getAllSafe()
      res.json(list)
    })
  }
}