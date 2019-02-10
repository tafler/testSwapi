const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(path.resolve(__dirname, 'db/db.json'))
const db = low(adapter)

module.exports.getAll = name => db.get(name).value()
module.exports.getOneById = (name, id) => {
  if (!id) return
  return db
    .get(name)
    .find({ id: +id })
    .value()
}
module.exports.getOneByHomeworld = (name, id) => {
  if (!id) return
  const url = `https://swapi.co/api/planets/${id}/`
  return db
    .get(name)
    .filter({ homeworld: url })
    .value()
}
module.exports.clearDB = list => {
  for (const one of list) {
    db.get(one.name)
      .remove()
      .write()
  }

  db.defaults({
    pilots: [],
    starships: [],
    planets: []
  }).write()
}

module.exports.fillDB = (name, data) => {
  db.get(name)
    .push(...data)
    .write()
}
