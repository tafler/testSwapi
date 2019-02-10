const model = require('./model')

module.exports.getStarships = (req, res) => {
  res.send(model.getAll('starships'))
}
module.exports.getPlanetPreview = (req, res) => {
  res.send(model.getAll('planets'))
}
module.exports.getPlanetOne = (req, res) => {
  res.send(model.getOneById('planets', req.params.id))
}
module.exports.getStarshipOne = (req, res) => {
  res.send(model.getOneById('starships', req.params.id))
}
module.exports.getPilotsFromPlanet = (req, res) => {
  res.send(model.getOneByHomeworld('pilots', req.params.id))
}
