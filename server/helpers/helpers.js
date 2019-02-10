const request = require('request-promise')
module.exports = {
  getIdFromUrl(url) {
    const res = +url.split('/').splice(-2, 1)[0]
    if (!isNaN(res)) return +res
  },
  delOpts: [
    'created',
    'edited',
    'species',
    'vehicles',
    'films',
    'starships',
    'residents'
  ],
  async request(url) {
    try {
      const data = await request(url)
      return JSON.parse(data)
    } catch (e) {
      console.log(e)
    }
  }
}
