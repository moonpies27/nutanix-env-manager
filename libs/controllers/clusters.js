const db = require('../db')

module.exports = class Cluster {

  constructor(c) {
    this.name = c.name,
    this.externalIp = c.externalIp,
    this.user = c.user,
    this.password = c.password,
    this.port = c.port
  }

  static getAll() {
    return db.select('*').from('clusters')
  }

  static getAllSafe() {
    return db.select('id', 'name', 'externalIp', 'port').from('clusters')
  }

}