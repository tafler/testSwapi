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
  ]
}
