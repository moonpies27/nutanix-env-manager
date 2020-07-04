const knex = require('knex')
const knexfile = require('../../knexfile.js').production

const db = knex(knexfile)

db.migrate.latest()

module.exports = db
