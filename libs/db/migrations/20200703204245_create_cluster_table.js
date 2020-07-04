exports.up = function(knex) {
  return knex.schema.hasTable('clusters').then(function(exists) {
      if (!exists) {
          return knex.schema.createTable('clusters', function(t) {
              t.increments()
              t.string('name', 32)
              t.string('externalIp', 12)
              t.string('user', 32)
              t.string('password', 32)
              t.integer('port')
          })
      }
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('clusters')
}
