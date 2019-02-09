const path = require('path')
const request = require('request-promise')
const low = require('lowdb')
const consola = require('consola')

const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.resolve(__dirname, '..', 'db/db.json'))
const db = low(adapter)
const helpers = require('./helpers')

function modifyData(data, name) {
  for (const one of data) {
    one.id = helpers.getIdFromUrl(one.url)
    for (const name in helpers.delOpts) delete one[helpers.delOpts[name]] // сносим ненужные поля
    if (name === 'starships') {
      one.img = '/img/starship.png'
    }
    if (name === 'planets') {
      one.img = `/img/planet-${Math.floor(Math.random() * (6 - 1) + 1)}.png`
    }
  }
  db.get(name)
    .push(...data)
    .write()
}

// сбор ВСЕХ данных с апи в цикле
async function getAllData(item) {
  let next = item.url
  while (next) {
    try {
      let data = await request(next)
      data = JSON.parse(data)
      next = data.next
      modifyData(data.results, item.name)
    } catch (e) {
      throw e
    }
  }
}

module.exports = async function getDataFromApi(list) {
  const start = new Date()
  if (list.length === 0) return

  // очистка базы перед загрузкой данных
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

  // вызов метода для всех переданных типов данных и урлов

  const allData = list.map(entry => {
    return getAllData(entry)
  })

  await Promise.all(allData)

  const end = new Date()
  consola.info(
    'Getting data from api takes ' + (+end.getTime() - +start.getTime()) + 'ms'
  )
}
