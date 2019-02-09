const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(path.resolve(__dirname, 'db/db.json'))
const db = low(adapter)

module.exports.getStarships = (req, res) => {
  res.send(db.get('starships').value())
}
module.exports.getPlanetPreview = (req, res) => {
  res.send(db.get('planets').value())
}
module.exports.getPlanetOne = (req, res) => {
  if (!req.params.id) return
  const list = db
    .get('planets')
    .find({ id: +req.params.id })
    .value()
  res.send(list)
}
module.exports.getStarshipOne = (req, res) => {
  if (!req.params.id) return
  const list = db
    .get('starships')
    .find({ id: +req.params.id })
    .value()
  res.send(list)
}
module.exports.getPilotsFromPlanet = (req, res) => {
  if (!req.params.id) return
  const url = `https://swapi.co/api/planets/${req.params.id}/`
  const list = db
    .get('pilots')
    .filter({ homeworld: url })
    .value()
  res.send(list)
}
