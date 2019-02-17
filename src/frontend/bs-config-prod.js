module.exports = {
  server: {
    middleware: {
      1: require('connect-history-api-fallback')({index: '/index-prod.html', verbose: true}),
      2: require('compression')()
    }
  }
};