const consola = require('consola')

const model = require('../model.js')
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
  model.fillDB(name, data)
}

// сбор ВСЕХ данных с апи в цикле
async function getAllData(item) {
  let next = item.url
  while (next) {
    const data = await helpers.request(next)
    next = data.next
    modifyData(data.results, item.name)
  }
}

module.exports = async function getDataFromApi(list) {
  const start = new Date()
  if (list.length === 0) return

  // очистка базы перед загрузкой данных
  await model.clearDB(list)

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
